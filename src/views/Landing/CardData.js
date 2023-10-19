import ahorro from "../../assets/img-landing/ahorro4.jpg"
import precios from "../../assets/img-landing/precios.jpg"
import historico from "../../assets/img-landing/historico1.jpg"
import prevision from "../../assets/img-landing/predecir.jpg"

const cardData = [
    {
      title: "Precios Diarios",
      description:
        "Consulta el precio de la electricidad para mañana y optimiza el uso de tus dispositivos para para reducir tus costos.",
      action: "Ver precio del día",
      image: precios,
    },
    {
      title: "Histórico de Precios",
      description:
        "Accede a datos históricos y entiende las tendencias del mercado eléctrico. La información es poder, ¡úsala a tu favor!",
      action: "Ver histórico",
      image: historico,
    },
    {
      title: "Eficiencia",
      description:
        "Descubre las claves para un consumo energético inteligente y obtén un mayor control sobre tus gastos, mejorando así tu gestión financiera.",
        action: "Ver mi eficiencia",
      image: prevision,
    },
    {
      title: "Consumo y Gasto",
      description:
        "Analiza tu consumo y controla tus gastos energéticos detalladamente, logrando así un significativo ahorro en tu factura.",
      action: "Ver mis estadísticas",
      image: ahorro,
    },
  ];
  
  export default cardData;
  