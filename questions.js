const questionsData = [
    {
        question: "¿Cuál es la función principal por la que se inventaron los derivados financieros?",
        options: {
            A: "Generar apalancamiento ilimitado",
            B: "Especular con el movimiento de precios",
            C: "Gestionar y transferir el riesgo",
            D: "Obtener ingresos por primas"
        },
        answer: "C",
        explanation: "La función principal de los derivados es la gestión y transferencia de riesgos, como el riesgo de tipo de cambio o de precio."
    },
    {
        question: "¿Qué característica clave de los derivados permite controlar una posición grande con poco dinero?",
        options: {
            A: "La liquidación en efectivo",
            B: "El nocional",
            C: "El apalancamiento",
            D: "La delta"
        },
        answer: "C",
        explanation: "El apalancamiento permite controlar una posición grande con poco dinero, aumentando ganancias y pérdidas potenciales."
    },
    {
        question: "¿Qué mercado permite negociar contratos directamente sin intermediario central?",
        options: {
            A: "Mercados organizados",
            B: "Mercados de futuros",
            C: "Mercados OTC (Over the Counter)",
            D: "Cámaras de compensación"
        },
        answer: "C",
        explanation: "En los mercados OTC las partes negocian directamente, ofreciendo flexibilidad pero asumiendo más riesgo de contraparte."
    },
    {
        question: "¿Cuál es el riesgo de que la otra parte del contrato no cumpla con sus obligaciones?",
        options: {
            A: "Riesgo de mercado",
            B: "Riesgo de contraparte",
            C: "Riesgo de liquidez",
            D: "Riesgo operativo"
        },
        answer: "B",
        explanation: "El riesgo de contraparte es la posibilidad de que una de las partes no cumpla lo acordado."
    },
    {
        question: "¿Qué mide la sensibilidad del precio de un derivado ante cambios en el precio del activo subyacente?",
        options: {
            A: "Delta",
            B: "Theta",
            C: "Vega",
            D: "Rho"
        },
        answer: "A",
        explanation: "La Delta mide cuánto cambia el precio del derivado por cada unidad que se mueve el activo subyacente."
    },
    {
        question: "¿Qué componente del precio de una opción representa la probabilidad de que termine 'In the Money'?",
        options: {
            A: "Valor intrínseco",
            B: "Valor extrínseco (temporal)",
            C: "Precio de ejercicio",
            D: "Nocional"
        },
        answer: "B",
        explanation: "El valor temporal refleja la incertidumbre y la posibilidad de que la opción gane valor antes de que expire."
    },
    {
        question: "¿En qué contrato las dos partes se obligan a comprar/vender un activo en una fecha futura?",
        options: {
            A: "Opción Call",
            B: "Opción Put",
            C: "Contrato Forward o Futuro",
            D: "Warrant"
        },
        answer: "C",
        explanation: "En los Forward y Futuros ambas partes tienen la obligación contractual de cumplir el intercambio."
    },
    {
        question: "¿Qué ocurre con el valor temporal de una opción a medida que se acerca el vencimiento?",
        options: {
            A: "Aumenta linealmente",
            B: "Se mantiene constante",
            C: "Disminuye (Time Decay)",
            D: "Solo depende de la volatilidad"
        },
        answer: "C",
        explanation: "El paso del tiempo erosiona el valor de las opciones (Time Decay)."
    },
    {
        question: "¿Qué es un contrato de Futuro?",
        options: {
            A: "Un acuerdo privado y flexible",
            B: "Un contrato estandarizado en un mercado organizado",
            C: "Un derecho, pero no una obligación",
            D: "Un seguro contra impagos"
        },
        answer: "B",
        explanation: "Los futuros son contratos estandarizados que se negocian en bolsas reguladas."
    },
    {
        question: "¿Para qué sirve la Cámara de Compensación (Clearing House)?",
        options: {
            A: "Para maximizar el apalancamiento",
            B: "Para actuar como contraparte y eliminar el riesgo de impago",
            C: "Para fijar los precios",
            D: "Para evitar inversores minoristas"
        },
        answer: "B",
        explanation: "La cámara garantiza el cumplimiento de los contratos, eliminando el riesgo de contraparte."
    }
    // ... He resumido aquí por espacio, pero asegúrate de que el archivo 
    // termine con el corchete de cierre ];
];
