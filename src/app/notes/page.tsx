import { promises as fs } from 'fs';
import path from 'path';
import { PostFrontmatter } from '@/features/posts/types/post';
import { evaluate } from 'next-mdx-remote-client/rsc';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const NotesPage = async () => {
    const noteFileNames = await fs.readdir(path.join(process.cwd(), 'src/data/notes'));

    const notes = await Promise.all(
        noteFileNames.filter((fileName) => fileName.endsWith('.mdx')).map(async (fileName, index) => {
            const content = await fs.readFile(path.join(process.cwd(), 'src/data/notes', fileName), 'utf-8');
            const { frontmatter } = await evaluate<PostFrontmatter>({
                source: content,
                options: {
                    parseFrontmatter: true,
                },
            });
            return {
                id: index,
                path: '/notes/' + fileName.replace('.mdx', ''),
                ...frontmatter,
            };
        }),
    );
    return (
        <div className='container mx-auto py-8 px-3'>
            <h1 className='text-3xl font-bold mb-8'>Blog Post</h1>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {notes.map((note) => (
                    <Link key={note.id} href={note.path}>
                        <Card className='hover:border-amber-500 h-full flex justify-between flex-col'>
                            <CardHeader>
                                <CardTitle>{note.title}</CardTitle>
                                <CardDescription>{note.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className='flex justify-between text-sm text-muted-foreground'>
                                    <span>{note.category}</span>
                                    <span>{note.date}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NotesPage;