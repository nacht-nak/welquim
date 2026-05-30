import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, Mail, Calendar, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ContactMessage } from '@/types/portfolio';

interface ShowProps {
    message: ContactMessage;
}

export default function ShowMessage({ message }: ShowProps) {
    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this message?')) {
            router.delete(`/admin/messages/${message.id}`);
        }
    };

    return (
        <>
            <Head title={`Read Message: ${message.subject || 'No Subject'} - Portfolio Admin`} />

            <div className="space-y-6 p-6 md:p-8 max-w-2xl mx-auto">
                <Link href="/admin/messages" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white">
                    <ArrowLeft className="h-4 w-4" /> Back to Inbox
                </Link>

                <Card className="border-white/5 bg-neutral-900/40">
                    <CardHeader className="border-b border-white/5 pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <CardTitle className="text-xl font-bold">{message.subject || 'No Subject'}</CardTitle>
                                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mt-2">
                                    <span className="flex items-center gap-1.5">
                                        <Mail className="h-3.5 w-3.5 text-primary" /> {message.name} &lt;{message.email}&gt;
                                    </span>
                                    <span className="flex items-center gap-1.5 font-mono">
                                        <Calendar className="h-3.5 w-3.5 text-primary" /> {new Date(message.created_at).toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <a href={`mailto:${message.email}?subject=Re: ${message.subject || 'Portfolio Inquiry'}`}>
                                    <Button size="sm" className="cursor-pointer">
                                        Reply via Email
                                    </Button>
                                </a>
                                <Button size="sm" variant="destructive" onClick={handleDelete} className="cursor-pointer">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="bg-neutral-950 p-6 rounded-xl border border-white/5 text-foreground leading-relaxed whitespace-pre-line text-sm min-h-[150px]">
                            {message.message}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
