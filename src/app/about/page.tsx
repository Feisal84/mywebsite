const AboutPage = () => {
  return (
    <div className="min-h-screen w-full bg-light-to-br from-blue-50 to-blue-200 flex items-stretch justify-center py-0 px-0 mt-56 px-4">
      <div className="w-full max-w-6xl h-screen bg-white/90 rounded-none shadow-lg flex flex-col md:flex-row overflow-hidden m-0">
        {/* Left: Main Info */}
        <div className="md:w-2/3 p-8 overflow-y-auto">
          {/* Name & Intro */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-0 leading-tight">
            Feisal<br />
            <span className="text-yellow-500">Ibrahim Hussein</span>
          </h1>
          <p className="text-gray-700 mt-2 mb-6 text-sm md:text-base">
            Motivierter und lernbereiter Fachinformatiker für Anwendungsentwicklung mit fundierten Kenntnissen in moderner Webentwicklung, React, Node.js, Java sowie agiler Softwareentwicklung. Ich suche eine Position, in der ich mein Wissen praktisch anwenden, weiterentwickeln und zum Unternehmenserfolg beitragen kann.
          </p>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-blue-900 border-b-2 border-orange-400 pb-1 mb-2">Schulbildung</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>12.12.2023 – 12.12.2025: Fachinformatiker Anwendungsentwicklung, GFN GmbH</li>
              <li>08.2006 – 11.2009: Center For Continuing Education (Cape Coast University)</li>
              <li>Busy Bee Computer School, Kumasi-Ghana</li>
              <li>Anglican Secondary School, Kumasi-Ghana</li>
            </ul>
          </section>

          {/* Training */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-blue-900 border-b-2 border-orange-400 pb-1 mb-2">Berufsausbildung</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>21.12.2023 – 12.12.2025: Ausbildung zum Fachinformatiker - Anwendungsentwicklung, GFN GmbH</li>
              <li>Zertifikate: Agile Scrum Foundation, Java-Zertifikat</li>
            </ul>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-blue-900 border-b-2 border-orange-400 pb-1 mb-2">Praktische Erfahrung</h2>
            <p className="text-gray-700 text-sm">
              15.03.2023 – 15.06.2023: AE-Solutions – Beta Tester und Entwickler einer Landingpage für die Deadly App<br />
              <span className="font-semibold">Technologien:</span> React, HTML, CSS, JavaScript
            </p>
          </section>

          {/* Hobbies */}
          <section>
            <h2 className="text-lg font-bold text-blue-900 border-b-2 border-orange-400 pb-1 mb-2">Hobbys & Interessen</h2>
            <p className="text-gray-700 text-sm">
              Programmieren, Entwicklung von Webanwendungen, Lesen von Fachliteratur und Technologieblogs
            </p>
          </section>
        </div>

        {/* Right: Contact & Skills */}
        <div className="md:w-1/3 bg-orange-500 flex flex-col items-center justify-start p-6 relative overflow-y-auto">
          {/* Profile Image */}
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white absolute -top-14 left-1/2 -translate-x-1/2 shadow-lg bg-white">
            <img
              src="/images/profile.jpg"
              alt="Feisal Ibrahim Hussein"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-20 w-full">
            {/* Contact */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <h3 className="text-orange-600 font-bold mb-2 text-base">Kontakt</h3>
              <ul className="text-sm text-gray-800 space-y-1">
                <li className="flex items-center gap-2"><span className="inline-block w-4">🏠</span> Siebenbürger Str. 21, 33609 Bielefeld</li>
                <li className="flex items-center gap-2"><span className="inline-block w-4">📞</span> 015739222233</li>
                <li className="flex items-center gap-2"><span className="inline-block w-4">✉️</span> <a href="mailto:Kingfaisal84@gmail.com" className="text-blue-700">Kingfaisal84@gmail.com</a></li>
                <li className="flex items-center gap-2"><span className="inline-block w-4">🌐</span> <a href="https://www.kingfaisal.com" className="text-blue-700">kingfaisal.com</a></li>
              </ul>
            </div>
            {/* Skills */}
            <div className="bg-blue-700 rounded-lg shadow p-4 mb-6">
              <h3 className="text-white font-bold mb-2 text-base">Kenntnisse & Fähigkeiten</h3>
              <ul className="text-sm text-blue-100 space-y-1">
                <li><span className="font-semibold">Programmiersprachen & Tools:</span> HTML, CSS, JavaScript, React, Python, PHP, MySQL, Supabase</li>
                <li><span className="font-semibold">Datenbanken:</span> MySQL, PostgreSQL, MongoDB</li>
                <li><span className="font-semibold">Sprachen:</span> Englisch (fließend), Deutsch (gut), Arabisch, Hausa, Twi, Griechisch</li>
              </ul>
            </div>
            {/* Soft Skills */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-orange-600 font-bold mb-2 text-base">Soft Skills</h3>
              <ul className="text-sm text-gray-800 space-y-1">
                <li>Teamgeist, Lernbereitschaft, Selbstständiges Arbeiten</li>
                <li>Flexibilität, Zuverlässigkeit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
