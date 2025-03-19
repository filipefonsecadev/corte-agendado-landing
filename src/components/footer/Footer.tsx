
import React from "react";
import { 
  Mail, 
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#151823] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-baseline mb-4">
              <span className="text-2xl font-bold text-white">
                <span className="text-[#4D9EEB]">Corte</span> Agendado
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Sistema de agendamento completo para barbearias. Simplifique sua gestão e aumente seus resultados.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#4D9EEB] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#4D9EEB] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#4D9EEB] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-[#4D9EEB] transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#plans" className="text-gray-400 hover:text-[#4D9EEB] transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-[#4D9EEB] transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#4D9EEB] transition-colors">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#4D9EEB] transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#4D9EEB] transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#4D9EEB] transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#4D9EEB] transition-colors">
                  Tutoriais
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#4D9EEB]" />
                <span className="text-gray-400">suporte@corteagendado.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#4D9EEB]" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Corte Agendado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
