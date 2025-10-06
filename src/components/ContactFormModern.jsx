import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { trackEvent, trackConversion } from '../lib/utmTracker';

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
  service: yup.string().required('Serviço é obrigatório'),
  message: yup.string().required('Mensagem é obrigatória'),
});

const ContactFormModern = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Sem alteração de comportamento do select; mantemos UI nativa

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Rastrear início do envio do formulário
    trackEvent('form_submit_start', {
      form_type: 'contact',
      service: data.service
    });

    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Criar mensagem para WhatsApp
      const message = `Olá! Gostaria de solicitar um orçamento:

Nome: ${data.name}
E-mail: ${data.email}
Telefone: ${data.phone}
Serviço desejado: ${data.service}
Mensagem: ${data.message}

Aguardo retorno!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/5592991502637?text=${encodedMessage}`;
      
      // Rastrear conversão
      trackConversion('contact_form_submit', {
        service: data.service,
        lead_value: 100 // Valor estimado do lead
      });
      
      // Rastrear clique no WhatsApp
      trackEvent('whatsapp_click', {
        source: 'contact_form',
        service: data.service
      });
      
      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      trackEvent('form_submit_error', {
        error: error.message,
        form_type: 'contact'
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Estruturas Metálicas',
    'Telhados e Coberturas',
    'Galpões Metálicos',
    'Tanques de combustível',
    'Escadas de Todos os Modelos',
    'Tubulações Industriais',
    'Redes de Combate a Incêndio',
    'Soldagens Especiais',
    'Calhas e Rufos',
    'Manutenção e Reformas',
    'Móveis Metálicos Planejados',
    'Equipamentos para Academias',
    'Outros'
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Formulário */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-300 p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-servitec-orange focus:border-servitec-orange transition-all duration-300 text-gray-900 placeholder-gray-500 hover:border-gray-700"
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* E-mail e Telefone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-servitec-orange focus:border-servitec-orange transition-all duration-300 text-gray-900 placeholder-gray-500 hover:border-gray-700"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-servitec-orange focus:border-servitec-orange transition-all duration-300 text-gray-900 placeholder-gray-500 hover:border-gray-700"
                    placeholder="(11) 99999-9999"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Serviço */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Serviço Desejado *
                </label>
                <select
                  {...register('service')}
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-servitec-orange focus:border-servitec-orange transition-all duration-300 text-gray-900 bg-white hover:border-gray-400 max-h-[60vh] overflow-y-auto no-scrollbar sm:max-h-none sm:overflow-visible"
                >
                  <option value="" disabled>Selecione um serviço</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-servitec-orange focus:border-servitec-orange transition-all duration-300 resize-none text-gray-900 placeholder-gray-500 hover:border-gray-400"
                  placeholder="Descreva seu projeto, dimensões, prazo desejado, etc."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Status de Envio */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-800">Formulário enviado com sucesso! Redirecionando para o WhatsApp...</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-red-800">Erro ao enviar formulário. Tente novamente.</span>
                </div>
              )}

              {/* Botão de Envio */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-servitec-orange hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Enviar pelo WhatsApp
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-servitec-dark mb-6">
                Entre em Contato
              </h3>
              <p className="text-gray-600 mb-8">
                Nossa equipe está pronta para atender suas necessidades específicas. 
                Entre em contato conosco e receba um orçamento detalhado.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-servitec-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-servitec-dark mb-1">E-mail</h4>
                  <p className="text-gray-600">contato@servitecmetalurgica.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-servitec-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-servitec-dark mb-1">Telefone</h4>
                  <p className="text-gray-600">(92) 99150-2637</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-servitec-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-servitec-dark mb-1">Endereço</h4>
                  <p className="text-gray-600">Arquiteto Jose Henriques Bento Rodrigues, 4114, Loja 02 - Monte das Oliveiras - Manaus/AM</p>
                </div>
              </div>
            </div>

            {/* Estatísticas */}
            <div className="bg-servitec-dark rounded-2xl p-6 text-white">
              <h4 className="font-heading font-bold text-lg mb-4">Por que escolher a Servitec?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-servitec-orange">15+</div>
                  <div className="text-sm text-gray-300">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-servitec-orange">500+</div>
                  <div className="text-sm text-gray-300">Projetos Entregues</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormModern;
