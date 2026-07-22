import {Button} from "@/components/ui/button.tsx";

function App() {
  return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">
          React Course
        </h1>
          <br/>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600">Button</button>

          <Button variant="success">shadcn Button</Button>

          <Button variant="outline" asChild>
              <a href="/accounts">asChild Button</a>
          </Button>

          <Button variant="success">shadcn Button</Button>
      </main>
  );
}

export default App;
