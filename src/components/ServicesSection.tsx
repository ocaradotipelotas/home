import React, { useState } from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: var(--spacing-2xl) var(--spacing-md);
  background-color: var(--surface);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  color: var(--primary);
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
`;


const ServiceCard = styled.div`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  border-left: 4px solid var(--accent);
  min-width: 100px;


`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: var(--accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-xl);
`;

const ServiceTitle = styled.h3`
  color: var(--primary);
  margin-bottom: var(--spacing-sm);
`;

const ServiceDescription = styled.p`
  color: var(--text-light);
  line-height: 1.6;
`;

const services = [
  {
    icon: '🔧',
    title: 'Suporte Técnico',
    description: 'Formatação, remoção de vírus, upgrade e substituição de componentes. Suporte presencial e remoto 24h.'
  },
  {
    icon: '💻',
    title: 'Montagem e Instalação',
    description: 'Montagem de computadores, instalação de softwares e configuração completa de sistemas.'
  },
  {
    icon: '🔗',
    title: 'Internet das Coisas (IoT)',
    description: 'Implementação de soluções IoT para conectar e automatizar equipamentos e processos.'
  },
];

const servicesb2b = [
  {
    icon: '🔧',
    title: 'Suporte Técnico',
    description: 'Formatação, remoção de vírus, upgrade e substituição de componentes. Suporte presencial e remoto 24h.'
  },
  {
    icon: '💻',
    title: 'Montagem e Instalação',
    description: 'Montagem de computadores, instalação de softwares e configuração completa de sistemas.'
  },
  {
    icon: '📊',
    title: 'Inventário Tecnológico',
    description: 'Criação e gestão de inventário completo da infraestrutura tecnológica da sua empresa.'
  },
  {
    icon: '🏢',
    title: 'Gestão de Infraestrutura',
    description: 'Gestão completa da estrutura informatizada, otimização de processos e manutenção preventiva.'
  },
  {
    icon: '🌐',
    title: 'Presença Online',
    description: 'Gestão e otimização da presença digital da sua empresa, criação de websites e plataformas online.'
  },
  {
    icon: '⚙️',
    title: 'Automação por Software',
    description: 'Desenvolvimento de soluções automatizadas para otimizar processos internos da empresa.'
  },
  {
    icon: '🔗',
    title: 'Internet das Coisas (IoT)',
    description: 'Implementação de soluções IoT para conectar e automatizar equipamentos e processos.'
  },
  {
    icon: '👥',
    title: 'Treinamento de Equipes',
    description: 'Capacitação da sua equipe para uso eficiente de tecnologias e sistemas implementados.'
  }
];

const ServiceButton = styled.button`
  background: none;
  border: none;

    &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }  
`

const ServicesSection: React.FC = () => {
  const [service, setService] = useState('none');

  const handleServiceClick = (serviceName: string) => {
    setService(serviceName);
  };

  return (
    <ServicesContainer id="servicos">
      <Container>
        <SectionTitle>Nossos Serviços</SectionTitle>
          <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%', height: '1rem' }}>
        {
          service !== 'none' && (
              <ServiceButton onClick={() => handleServiceClick('none')}>
                <p style={{fontWeight: 'bold'}}>
                  Voltar
                </p>
              </ServiceButton>
          )
        }
        </section>
        {service === 'none' && (
          <ServicesGrid>
            <ServiceButton onClick={() => handleServiceClick('b2b')}>
              <ServiceCard>
                <ServiceIcon>💡</ServiceIcon>
                <ServiceTitle>Para sua Empresa</ServiceTitle>
                <ServiceDescription>Suporte 24h, gestão de infraestrutura, treinamento de equipes... Clique e saiba mais!</ServiceDescription>
              </ServiceCard>
            </ServiceButton>
            <ServiceButton onClick={() => handleServiceClick('people')}>
              <ServiceCard>
                <ServiceIcon>👤</ServiceIcon>
                <ServiceTitle>Para Você</ServiceTitle>
                <ServiceDescription>Manuteção, montagem, upgrades, suporte técnico e internet das coisas... Clique e saiba mais!</ServiceDescription>
              </ServiceCard>
            </ServiceButton>
          </ServicesGrid>
        )}
        {(service === 'b2b') && (
            <ServicesGrid>
              {servicesb2b.map((service, index) => (
                <ServiceCard key={index}>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceCard>
              ))}
            </ServicesGrid>
        )}
        {(service === 'people') && (
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        )}
      </Container>
    </ServicesContainer>
  );
};

export default ServicesSection;