import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="bg-[#F7F3EF] text-[#1E1E1E]">
      {/* Hero Section */}
      ...

      {/* Partners Section */}
      <div className="py-20 px-6 bg-[#FFFFFF] text-[#1E1E1E]">
        ...
      </div>

      {/* Contact Form Section */}
      <div className="py-20 px-6 bg-[#F7F3EF] text-[#1E1E1E]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-[#3A2F28]">
            Заполните форму — мы свяжемся с вами в ближайшее время и ответим на все вопросы.
          </p>
        </div>

        <form className="max-w-3xl mx-auto grid gap-6">
          <input
            type="text"
            placeholder="Ваше имя"
            className="p-4 rounded-xl border border-[#DAD6C6] focus:outline-none focus:ring-2 focus:ring-[#7A9D54]"
          />
          <input
            type="email"
            placeholder="Email или телефон"
            className="p-4 rounded-xl border border-[#DAD6C6] focus:outline-none focus:ring-2 focus:ring-[#7A9D54]"
          />
          <textarea
            placeholder="Ваше сообщение"
            rows={5}
            className="p-4 rounded-xl border border-[#DAD6C6] focus:outline-none focus:ring-2 focus:ring-[#7A9D54]"
          ></textarea>
          <Button className="bg-[#7A9D54] text-white hover:bg-[#6b8c48] px-6 py-3 rounded-2xl text-lg w-full">
            Отправить сообщение
          </Button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-[#3A2F28] text-[#F7F3EF] py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="text-lg font-semibold mb-3">TurveCore</h4>
            <p>Экологичные строительные блоки нового поколения.<br />
              Сделано в России. Готово для Европы.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Контакты</h4>
            <p>Email: info@turvecore.com</p>
            <p>Телефон: +7 (812) 000-00-00</p>
            <p>Адрес: Санкт-Петербург, Россия</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Мы в соцсетях</h4>
            <p><a href="#" className="underline">Telegram</a></p>
            <p><a href="#" className="underline">Instagram</a></p>
            <p><a href="#" className="underline">YouTube</a></p>
          </div>
        </div>

        <div className="mt-8 text-center text-xs opacity-70">
          © {new Date().getFullYear()} TurveCore. Все права защищены.
        </div>
      </footer>
    </div>
  );
}
