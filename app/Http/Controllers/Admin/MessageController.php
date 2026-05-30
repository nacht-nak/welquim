<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MessageController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Message::latest();

        if ($request->has('filter')) {
            match ($request->filter) {
                'unread' => $query->unread(),
                'read' => $query->read(),
                default => null,
            };
        }

        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere('subject', 'like', "%{$search}%");
            });
        }

        return Inertia::render('admin/messages/index', [
            'messages' => $query->paginate(15),
            'filters' => $request->only(['filter', 'search']),
            'unreadCount' => Message::unread()->count(),
        ]);
    }

    public function show(Message $message): Response
    {
        $message->markAsRead();

        return Inertia::render('admin/messages/show', [
            'message' => $message,
        ]);
    }

    public function markRead(Message $message): RedirectResponse
    {
        $message->markAsRead();

        return back()->with('success', 'Message marked as read.');
    }

    public function destroy(Message $message): RedirectResponse
    {
        $message->delete();

        return redirect()->route('admin.messages.index')->with('success', 'Message deleted successfully.');
    }
}
