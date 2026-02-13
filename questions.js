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
        question: "¿Qué mercado permite negociar contratos directamente sin intermediario central, ofreciendo flexibilidad pero más riesgo de contraparte?",
        options: {
            A: "Mercados organizados",
            B: "Mercados de futuros",
            C: "Mercados OTC (Over the Counter)",
            D: "Cámaras de compensación"
        },
        answer: "C",
        explanation: "En los mercados OTC las partes negocian directamente, lo que ofrece flexibilidad pero carece de la garantía de una cámara central."
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
        explanation: "El riesgo de contraparte o de crédito es la posibilidad de que una de las partes no pague o no cumpla lo acordado."
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
        question: "¿Qué componente del precio de una opción representa la probabilidad de que termine 'In the Money' antes del vencimiento?",
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
        question: "¿En qué tipo de contrato las dos partes se obligan a comprar/vender un activo a un precio fijado en una fecha futura?",
        options: {
            A: "Opción Call",
            B: "Opción Put",
            C: "Contrato Forward o Futuro",
            D: "Warrant"
        },
        answer: "C",
        explanation: "A diferencia de las opciones, en los Forward y Futuros ambas partes tienen la obligación contractual de cumplir el intercambio."
    },
    {
        question: "¿Qué ocurre con el valor temporal de una opción a medida que se acerca la fecha de vencimiento?",
        options: {
            A: "Aumenta linealmente",
            B: "Se mantiene constante",
            C: "Disminuye (Time Decay)",
            D: "Solo depende de la volatilidad"
        },
        answer: "C",
        explanation: "El paso del tiempo erosiona el valor de las opciones, proceso conocido como 'Theta' o decaimiento temporal."
    },
    {
        question: "¿Qué es un contrato de Futuro?",
        options: {
            A: "Un acuerdo privado y flexible entre dos empresas",
            B: "Un contrato estandarizado que se negocia en un mercado organizado",
            C: "Un derecho, pero no una obligación, de compra",
            D: "Un seguro contra impagos de deuda"
        },
        answer: "B",
        explanation: "Los futuros son contratos estandarizados (en activos, fechas y cantidades) que se negocian en bolsas reguladas."
    },
    {
        question: "¿Para qué sirve la Cámara de Compensación (Clearing House) en el mercado de futuros?",
        options: {
            A: "Para maximizar el apalancamiento",
            B: "Para actuar como contraparte de cada operación y eliminar el riesgo de impago",
            C: "Para fijar los precios de los activos",
            D: "Para evitar que los inversores minoristas operen"
        },
        answer: "B",
        explanation: "La cámara garantiza que si una parte falla, ella responde, eliminando el riesgo de contraparte para los participantes."
    },
    {
        question: "¿Qué significa el concepto de 'Mark-to-Market'?",
        options: {
            A: "Fijar el precio de venta al final del año",
            B: "La liquidación diaria de pérdidas y ganancias en las cuentas de margen",
            C: "Un tipo de análisis técnico",
            D: "La compra de acciones al contado"
        },
        answer: "B",
        explanation: "Es el proceso de ajustar diariamente los saldos de los inversores según el precio de cierre del mercado."
    },
    {
        question: "¿Qué es el 'Contango' en el mercado de futuros?",
        options: {
            A: "Cuando el precio del futuro es inferior al precio spot",
            B: "Cuando el precio del futuro es superior al precio spot",
            C: "Cuando no hay liquidez en el mercado",
            D: "Cuando el precio se mantiene plano"
        },
        answer: "B",
        explanation: "En Contango, el precio futuro es más alto que el actual, reflejando costes de almacenamiento, seguros y tipos de interés."
    },
    {
        question: "¿Qué sucede en una situación de 'Backwardation'?",
        options: {
            A: "El precio del futuro es más alto que el spot",
            B: "El precio spot es superior al precio del futuro",
            C: "El mercado está en equilibrio perfecto",
            D: "Se suspende la cotización"
        },
        answer: "B",
        explanation: "Ocurre cuando hay escasez del activo o una alta demanda inmediata, haciendo que el precio actual sea mayor al futuro."
    },
    {
        question: "¿Qué es una opción Call?",
        options: {
            A: "Una obligación de vender un activo",
            B: "Un derecho a comprar un activo a un precio determinado",
            C: "Un derecho a vender un activo a un precio determinado",
            D: "Un contrato de intercambio de tipos de interés"
        },
        answer: "B",
        explanation: "El comprador de una Call tiene el derecho (pero no la obligación) de comprar el activo subyacente al precio de ejercicio (strike)."
    },
    {
        question: "¿Qué es una opción Put?",
        options: {
            A: "Un derecho a comprar un activo",
            B: "Una obligación de compra",
            C: "Un derecho a vender un activo a un precio determinado",
            D: "Un contrato que siempre expira con valor"
        },
        answer: "C",
        explanation: "El comprador de una Put tiene el derecho de vender el activo al precio strike, lo cual es útil si el precio del mercado cae."
    },
    {
        question: "¿Qué significa que una opción está 'In the Money' (ITM)?",
        options: {
            A: "Que no tiene valor intrínseco",
            B: "Que tiene valor intrínseco positivo (ejercerla da beneficio inmediato frente al spot)",
            C: "Que el precio strike es igual al precio spot",
            D: "Que la opción va a expirar mañana"
        },
        answer: "B",
        explanation: "Una opción ITM es aquella que si se ejerciera ahora mismo, permitiría comprar más barato (Call) o vender más caro (Put) que el mercado."
    },
    {
        question: "¿Qué mide la 'Vega' en una opción?",
        options: {
            A: "El cambio de precio ante el paso del tiempo",
            B: "El cambio de precio ante cambios en los tipos de interés",
            C: "El cambio de precio ante cambios en la volatilidad implícita",
            D: "La probabilidad de ejercicio"
        },
        answer: "C",
        explanation: "Vega mide la sensibilidad del precio de la opción ante variaciones del 1% en la volatilidad esperada del mercado."
    },
    {
        question: "¿Cuál es el beneficio máximo potencial para el comprador de una opción Call?",
        options: {
            A: "Limitado a la prima pagada",
            B: "Limitado al precio strike",
            C: "Ilimitado",
            D: "Cero"
        },
        answer: "C",
        explanation: "Como el precio de una acción puede subir teóricamente hasta el infinito, el beneficio potencial de una Call también lo es."
    },
    {
        question: "¿Cuál es la pérdida máxima para el comprador de una opción (Call o Put)?",
        options: {
            A: "El valor total del activo subyacente",
            B: "La prima pagada",
            C: "Ilimitada",
            D: "El margen de garantía"
        },
        answer: "B",
        explanation: "Lo máximo que puede perder un comprador de opciones es el dinero que pagó por adquirir el derecho (la prima)."
    },
    {
        question: "¿Qué estrategia consiste en comprar una Call y una Put con el mismo strike y vencimiento?",
        options: {
            A: "Covered Call",
            B: "Straddle",
            C: "Bull Spread",
            D: "Iron Condor"
        },
        answer: "B",
        explanation: "Un Straddle busca beneficio cuando se espera un gran movimiento del precio, pero no se sabe en qué dirección será."
    },
    {
        question: "¿Qué es un Swap de tipos de interés?",
        options: {
            A: "Un intercambio de acciones por bonos",
            B: "Un contrato para intercambiar flujos de intereses (ej. fijo por variable)",
            C: "Una opción sobre futuros de petróleo",
            D: "Una póliza de seguros"
        },
        answer: "B",
        explanation: "Permite a las partes transformar sus obligaciones de pago de intereses de fijo a variable o viceversa."
    },
    {
        question: "¿Qué mide la Delta de una opción Put?",
        options: {
            A: "Un valor entre 0 y 1",
            B: "Un valor entre -1 y 0",
            C: "Siempre es superior a 1",
            D: "La volatilidad del mercado"
        },
        answer: "B",
        explanation: "La Delta de la Put es negativa porque si el activo subyacente sube de precio, el valor de la opción de venta baja."
    },
    {
        question: "¿Qué griega mide la aceleración o el cambio en la Delta?",
        options: {
            A: "Gamma",
            B: "Vega",
            C: "Theta",
            D: "Rho"
        },
        answer: "A",
        explanation: "Gamma mide cuánto cambia la Delta por cada unidad de movimiento del subyacente; indica la estabilidad de la Delta."
    },
    {
        question: "¿Cuál es la principal diferencia entre una opción y un warrant?",
        options: {
            A: "No hay diferencia",
            B: "El warrant es emitido por una institución financiera y las opciones se negocian en mercados organizados",
            C: "Las opciones duran más años que los warrants",
            D: "Los warrants no tienen apalancamiento"
        },
        answer: "B",
        explanation: "Mientras las opciones son contratos estandarizados entre particulares, los warrants son productos emitidos por entidades bancarias."
    },
    {
        question: "¿Qué es la Volatilidad Implícita?",
        options: {
            A: "La volatilidad que ha tenido el activo en el pasado",
            B: "La volatilidad que el mercado espera que tenga el activo en el futuro, reflejada en el precio de la opción",
            C: "La diferencia entre el precio strike y el spot",
            D: "El riesgo de quiebra del emisor"
        },
        answer: "B",
        explanation: "Es la 'temperatura' del mercado: cuánta fluctuación esperan los inversores hasta el vencimiento de la opción."
    },
    {
        question: "¿Qué mide la 'Rho' de una opción?",
        options: {
            A: "La sensibilidad ante cambios en los tipos de interés",
            B: "El impacto de los dividendos",
            C: "La velocidad de ejecución",
            D: "El riesgo de contraparte"
        },
        answer: "A",
        explanation: "Rho indica cuánto varía el precio de la opción ante un cambio del 1% en los tipos de interés libres de riesgo."
    },
    {
        question: "¿Qué estrategia se utiliza para proteger una cartera de acciones contra caídas?",
        options: {
            A: "Venta de Puts",
            B: "Compra de Puts (Protective Put)",
            C: "Venta de Calls",
            D: "Apalancamiento con futuros"
        },
        answer: "B",
        explanation: "Comprar una Put actúa como un seguro: si las acciones bajan, la Put gana valor y compensa la pérdida."
    },
    {
        question: "¿Qué es el 'Apalancamiento Financiero' en
