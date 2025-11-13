import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">About</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Blog Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">이 블로그는 local keem의 개발 블로그입니다. 자유롭게 개발에 대한 내용을 담습니다.</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Tech Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-secondary rounded-md">Python</span>
            <span className="px-3 py-1 bg-secondary rounded-md">FastAPI</span>
            <span className="px-3 py-1 bg-secondary rounded-md">Flask</span>
            <span className="px-3 py-1 bg-secondary rounded-md">JavaScript</span>
            <span className="px-3 py-1 bg-secondary rounded-md">Node.js</span>
            <span className="px-3 py-1 bg-secondary rounded-md">Express.js</span>
            <span className="px-3 py-1 bg-secondary rounded-md">MySQL</span>
            <span className="px-3 py-1 bg-secondary rounded-md">MariaDB</span>
            <span className="px-3 py-1 bg-secondary rounded-md">MongoDB</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-2">문의사항이나 제안사항이 있으시면 언제든 연락 주세요.</p>
          <div className="space-y-1">
            <p>📧 Email: hyunji.kim818@gmail.com</p>
            <p>💻 GitHub: github.com/localkeem</p>
            <p>🔗 LinkedIn: linkedin.com/in/localkeem</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;