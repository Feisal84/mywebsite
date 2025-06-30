"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProfilPic from "./asset/kingfaisal.jpg.jpg";
import Pic1 from "./asset/urlaub1.jpg";
import Pic2 from "./asset/urlaub2.jpg";
import Pic3 from "./asset/urlaub3.jpg";

export default function HomePage() {
  const [showContact, setShowContact] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    newsletter: false,
  });
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;
    const checked = type === "checkbox" && "checked" in target ? (target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function validateForm() {
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setFormError("Bitte füllen Sie alle Felder aus.");
      return false;
    }
    // Simple email regex
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setFormError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return false;
    }
    setFormError("");
    return true;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormSuccess("");
    if (!validateForm()) return;
    setFormSuccess("Nachricht erfolgreich gesendet!");
    setForm({ firstName: "", lastName: "", email: "", subject: "", message: "", newsletter: false });
  }

return (
<section className="max-w-100% mx-auto py-16 mt-16 px-4 bg-light-100  min-h-screen">
{/* Navigation Links */}
<nav className="flex flex-wrap gap-4 justify-center mb-8">
<Link href="/Portfolio" className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition">Portfolio</Link>
<Link href="/Videos" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Videos</Link>
<Link href="/shop" className="px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600 transition">Shop</Link>
</nav>
{/* Carousel */}
<Carousel
className="mb-10 rounded-lg shadow-lg"
showThumbs={false}
autoPlay
infiniteLoop
showArrows
showIndicators
renderArrowPrev={(onClickHandler, hasPrev, label) =>
hasPrev && (
<button type="button" onClick={onClickHandler} title={label} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow">
<span className="sr-only">Previous</span>
<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
</button>
)
}
renderArrowNext={(onClickHandler, hasNext, label) =>
hasNext && (
<button type="button" onClick={onClickHandler} title={label} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow">
<span className="sr-only">Next</span>
<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
</button>
)
}
renderIndicator={(onClickHandler, isSelected, index, label) => (
<li
className={`inline-block mx-1 w-3 h-3 rounded-full ${isSelected ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-700'} cursor-pointer`}
onClick={onClickHandler}
onKeyDown={onClickHandler}
value={index}
key={index}
role="button"
tabIndex={0}
aria-label={`${label} ${index + 1}`}
 />
)}
>
<div>
<Image src={Pic1} alt="Urlaub 1" width={800} height={400} className="w-full h-64 object-cover rounded-lg" />
</div>
<div>
<Image src={Pic2} alt="Urlaub 2" width={800} height={400} className="w-full h-64 object-cover rounded-lg" />
</div>
<div>
<Image src={Pic3} alt="Urlaub 3" width={800} height={400} className="w-full h-64 object-cover rounded-lg" />
</div>
</Carousel>
{/* End Carousel */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
<div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow">
<p className="text-lg text-gray-700 dark:text-gray-300">
Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, enim commodo potenti
 conubia montes fusce sapien augue, ac purus et convallis lobortis quis nec. Placerat cum 
 blandit curabitur platea cursus mollis nec semper, penatibus convallis nisi netus lacinia laoreet ante,
  fusce curae quam bibendum venenatis natoque himenaeos. Leo primis felis maecenas eros curae sociosqu cum gravida magna pharetra suspendisse dictumst quam tempus magnis cursus hac, conubia rhoncus mus mattis aliquet interdum nostra consequat massa fames cubilia nisi faucibus ridiculus odio
</p>
</div>
<div>
<div className="bg-gradient-to-br from-green-100 to-green-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow">
<p className="text-lg text-gray-700 dark:text-gray-300">
Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, enim 
commodo potenti conubia montes fusce sapien augue, ac purus et convallis 
lobortis quis nec. Placerat cum blandit curabitur platea cursus mollis nec semper, 
penatibus convallis nisi netus lacinia laoreet ante, fusce curae quam bibendum venenatis 
natoque himenaeos. Leo primis felis maecenas eros curae sociosqu cum gravida magna pharetra 
suspendisse dictumst quam tempus magnis cursus hac, conubia rhoncus mus mattis aliquet interdum 
nostra consequat massa fames cubilia nisi faucibus ridiculus odio
</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
{/* Contact Modal Trigger */}
<div className="mb-3 flex flex-col items-center">
<button
    type="button"
    className="btn bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition"
    onClick={() => setShowContact(true)}
  >
    Kontaktformular
  </button>
  {showContact && (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay: gray background, same in both light and dark mode */}
      <div className="absolute inset-0 bg-lightgray-700/80 transition-colors duration-300" />
      <div className="relative bg-white dark:bg-light-900 rounded-lg shadow-lg p-8 w-full max-w-md z-10">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
          onClick={() => setShowContact(false)}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Kontaktformular</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input name="firstName" type="text" placeholder="Vorname" className="w-full p-2 border rounded" value={form.firstName} onChange={handleInputChange} />
          <input name="lastName" type="text" placeholder="Nachname" className="w-full p-2 border rounded" value={form.lastName} onChange={handleInputChange} />
          <input name="email" type="email" placeholder="E-Mail" className="w-full p-2 border rounded" value={form.email} onChange={handleInputChange} />
          <input name="subject" type="text" placeholder="Betreff" className="w-full p-2 border rounded" value={form.subject} onChange={handleInputChange} />
          <textarea name="message" placeholder="Nachricht" className="w-full p-2 border rounded" rows={4} value={form.message} onChange={handleInputChange}></textarea>
          <div className="flex items-center gap-2">
            <input name="newsletter" type="checkbox" id="newsletter" className="form-checkbox" checked={form.newsletter} onChange={handleInputChange} />
            <label htmlFor="newsletter">Ich möchte den Newsletter abonnieren</label>
          </div>
          {formError && <div className="text-red-600 text-sm">{formError}</div>}
          {formSuccess && <div className="text-green-600 text-sm">{formSuccess}</div>}
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Absenden</button>
        </form>
      </div>
    </div>
  )}
</div>
{/* Vacation Image */}
<div className="mb-3 flex justify-center">
<Image src={ProfilPic} alt="Bild vom Urlaub" width={180} height={120} className="rounded shadow" />
</div>
{/* Accordion (static example) */}
<div className="mb-3">
<div className="rounded-xl overflow-hidden shadow divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
<details open className="group">
<summary className="cursor-pointer px-4 py-2 font-semibold bg-gray-100 dark:bg-gray-800">Neuheiten</summary>
<div className="px-4 py-2 text-gray-700 dark:text-gray-300">This is the first item's accordion body.</div>
</details>
<details className="group">
<summary className="cursor-pointer px-4 py-2 font-semibold bg-gray-100 dark:bg-gray-800">Jetzt Angebote sichern</summary>
<div className="px-4 py-2 text-gray-700 dark:text-gray-300">This is the second item's accordion body.</div>
</details>
<details className="group">
<summary className="cursor-pointer px-4 py-2 font-semibold bg-gray-100 dark:bg-gray-800">FAQ</summary>
<div className="px-4 py-2 text-gray-700 dark:text-gray-300">This is the third item's accordion body.</div>
</details>
</div>
</div>
{/* List Group */}
<div className="mb-3">
<ul className="rounded-xl overflow-hidden shadow divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
<li className="px-4 py-2 font-semibold bg-green-600 text-white">An active item</li>
<li className="px-4 py-2">A second item</li>
<li className="px-4 py-2">A third item</li>
<li className="px-4 py-2">A fourth item</li>
<li className="px-4 py-2">And a fifth one</li>
<li className="px-4 py-2">And a sixth one</li>
</ul>
</div>
</div>
</section>
);
}