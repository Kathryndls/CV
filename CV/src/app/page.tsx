export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Добро пожаловать в мое CV</h1>
          <p className="text-xl">Профессионал в разработке и дизайне</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Обо мне</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Я опытный разработчик с навыками в Next.js, React и других технологиях.
            Создаю красивые и функциональные веб-приложения.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Портфолио</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Example */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Пример фото"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <p className="mt-4">Пример проекта с фото</p>
            </div>
            {/* Video Example */}
            <div className="text-center">
              <video
                controls
                className="w-full h-64 rounded-lg shadow-lg"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
              <p className="mt-4">Пример проекта с видео</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Контакты</h2>
          <p className="text-lg">Свяжитесь со мной: email@example.com</p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Написать
          </button>
        </div>
      </section>
    </main>
  )
}