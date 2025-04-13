

export default function Footer() {
  return (
    <footer className="py-8 bg-primary">
      <div className="max-w-5xl mx-auto px-4">
       
        <p className="text-center text-gray-400 mt-4">
          © {new Date().getFullYear()} Sachini Ruvindya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}