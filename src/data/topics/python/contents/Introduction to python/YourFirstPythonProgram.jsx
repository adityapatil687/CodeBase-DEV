import CodeSection from "../../../../../components/TopicDetail/CodeSection";

export default function YourFirstPythonProgram() {
  return (
    <>
      <main className="p-4">
          <h1>Your First Python Program</h1>
          <p>
            In the previous tutorial, you learned how to install Python on your
            computer. Now, let's write a simple Python program.
          </p>
          <p>The following program displays Hello, World! on the screen.</p>
          <CodeSection>{`print("Hello")`}</CodeSection>
        </main>
    </>
  );
}
