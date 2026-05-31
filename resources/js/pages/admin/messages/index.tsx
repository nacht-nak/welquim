import { Head, Link, router } from '@inertiajs/react';
import { Inbox, Eye, Check, Trash2, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { ContactMessage } from '@/types/portfolio';

interface IndexProps {
    messages: {
        data: ContactMessage[];
        links: any[];
    };
    filters: {
        filter?: string;
        search?: string;
    };
    unreadCount: number;
}

export default function MessagesIndex({ messages, filters, unreadCount }: IndexProps) {
    const [search, setSearch] = useState(filters.search || '');
    const [statusFilter, setStatusFilter] = useState(filters.filter || 'all');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            handleFilterChange();
        }, 400);

        return () => clearTimeout(delayDebounceFn);
    }, [search, statusFilter]);

    const handleFilterChange = () => {
        router.get(
            '/admin/messages',
            {
                search: search || undefined,
                filter: statusFilter === 'all' ? undefined : statusFilter,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            }
        );
    };

    const handleMarkRead = (id: number) => {
        router.patch(`/admin/messages/${id}/read`, {}, {
            preserveScroll: true,
        });
    };

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this message?')) {
            router.delete(`/admin/messages/${id}`);
        }
    };

    return (
        <>
            <Head title="Contact Messages - Portfolio Admin" />

            <div className="space-y-8 p-6 md:p-8 max-w-6xl mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Contact Messages</h1>
                        <p className="text-muted-foreground text-sm mt-1">
                            Review messages sent by visitors from your public portfolio contact form.
                        </p>
                    </div>

                    {unreadCount > 0 && (
                        <div className="bg-amber-500/10 text-amber-400 text-xs px-3 py-1.5 rounded-full border border-amber-500/20 font-semibold animate-pulse">
                            {unreadCount} Unread Messages
                        </div>
                    )}
                </div>

                {/* Filters toolbar */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Button
                            variant={statusFilter === 'all' ? 'default' : 'outline'}
                            onClick={() => setStatusFilter('all')}
                            className="rounded-full cursor-pointer"
                            size="sm"
                        >
                            All Messages
                        </Button>
                        <Button
                            variant={statusFilter === 'unread' ? 'default' : 'outline'}
                            onClick={() => setStatusFilter('unread')}
                            className="rounded-full cursor-pointer"
                            size="sm"
                        >
                            Unread
                        </Button>
                        <Button
                            variant={statusFilter === 'read' ? 'default' : 'outline'}
                            onClick={() => setStatusFilter('read')}
                            className="rounded-full cursor-pointer"
                            size="sm"
                        >
                            Read
                        </Button>
                    </div>

                    <div className="w-full md:max-w-xs relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search messages..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10 rounded-full border-white/10 bg-neutral-900/40 text-foreground"
                        />
                    </div>
                </div>

                {/* Messages Table */}
                <Card className="border-white/5 bg-neutral-900/40">
                    <CardContent className="p-0">
                        {messages.data.length > 0 ? (
                            <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-neutral-800/20">
                                        <TableHead>Sender</TableHead>
                                        <TableHead>Subject</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {messages.data.map((msg) => (
                                        <TableRow 
                                            key={msg.id} 
                                            className={`hover:bg-neutral-800/10 ${!msg.is_read ? 'bg-primary/5 font-semibold' : ''}`}
                                        >
                                            <TableCell className="text-foreground">
                                                <div className="flex flex-col">
                                                    <span>{msg.name}</span>
                                                    <span className="text-xs text-muted-foreground font-normal">{msg.email}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-muted-foreground">{msg.subject || 'No Subject'}</TableCell>
                                            <TableCell className="text-muted-foreground font-mono text-xs">
                                                {new Date(msg.created_at).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell>
                                                <span className={`text-[10px] px-2.5 py-0.5 rounded-full ${msg.is_read ? 'bg-neutral-800 text-neutral-400' : 'bg-amber-500/15 text-amber-400'}`}>
                                                    {msg.is_read ? 'Read' : 'Unread'}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link href={`/admin/messages/${msg.id}`}>
                                                        <Button size="icon" variant="ghost" className="h-8 w-8 cursor-pointer">
                                                            <Eye className="h-4 w-4 text-neutral-400 hover:text-white" />
                                                        </Button>
                                                    </Link>
                                                    {!msg.is_read && (
                                                        <Button 
                                                            size="icon" 
                                                            variant="ghost" 
                                                            onClick={() => handleMarkRead(msg.id)} 
                                                            className="h-8 w-8 cursor-pointer"
                                                            title="Mark as Read"
                                                        >
                                                            <Check className="h-4 w-4 text-emerald-400" />
                                                        </Button>
                                                    )}
                                                    <Button 
                                                        size="icon" 
                                                        variant="ghost" 
                                                        onClick={() => handleDelete(msg.id)} 
                                                        className="h-8 w-8 cursor-pointer"
                                                    >
                                                        <Trash2 className="h-4 w-4 text-red-500 hover:text-red-400" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        ) : (
                            <div className="text-center py-12 text-muted-foreground flex flex-col items-center justify-center gap-3">
                                <Inbox className="h-10 w-10 text-neutral-600" />
                                <span>No messages received yet.</span>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
