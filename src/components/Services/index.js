import React from 'react';
import Icon1 from '../../images/busca.png';
import Icon2 from '../../images/conexao.png';
import Icon3 from '../../images/beneficios.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Nossos serviços</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Simplifique sua busca</ServicesH2>
          <ServicesP>
            Encontre o psicologo mais próximo da sua casa.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Conexão</ServicesH2>
          <ServicesP>
            Aumente sua cartela de rede de apoio. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Beneficios</ServicesH2>
          <ServicesP>
            Assine e conheça toda a ferramenta. 
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
