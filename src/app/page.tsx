import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

const MainPage = () => {
  redirect('/posts');
  return (
    
    <div>
      {/* Hero Section */}
      <section className='container mx-auto px-4 py-20 text-center'>
        <h1 className='text-5xl font-bold mb-4'>개발 블로그</h1>
        <p className='text-xl text-muted-foreground mb-8'>local keem의 개발 블로그입니다.</p>
        <Button asChild>
          <Link href='/posts' className='inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition'>
            포스트 보러가기
          </Link>
        </Button>
      </section>

      {/* 소개 Section */}
      <section className='container mx-auto px-4 py-12'>
        <div className='bg-secondary rounded-lg p-8 text-center'>
          <h2 className='text-2xl font-bold mb-4'>블로그 소개</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>이 블로그는 local keem의 개발 블로그입니다. 여러가지 개발 이야기를 나눕니다.</p>
        </div>
      </section>
    </div>
  )
};

export default MainPage;