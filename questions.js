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
        question: "¿Qué es el 'Apalancamiento Financiero' en derivados?",
        options: {
            A: "Invertir solo el capital propio disponible",
            B: "La capacidad de obtener una exposición mayor al capital invertido",
            C: "Pedir un préstamo al banco para comprar pan",
            D: "Vender activos para reducir deuda"
        },
        answer: "B",
        explanation: "Permite mover grandes nominales depositando solo una pequeña fracción como garantía."
    },
    {
        question: "¿Qué riesgo NO es típico de los derivados financieros?",
        options: {
            A: "Riesgo de mercado",
            B: "Riesgo de liquidez",
            C: "Riesgo de longevidad del inversor",
            D: "Riesgo de apalancamiento"
        },
        answer: "C",
        explanation: "Aunque el inversor deba tener salud, la 'longevidad' es un riesgo actuarial de seguros/pensiones, no un factor de mercado de derivados."
    },
    {
        question: "¿Qué significa que un contrato de futuros sea 'Cash Settled'?",
        options: {
            A: "Que hay que entregar el activo físico (ej. barriles de petróleo)",
            B: "Que se liquida mediante el pago de la diferencia en efectivo",
            C: "Que solo se puede pagar con monedas de oro",
            D: "Que el contrato no tiene valor"
        },
        answer: "B",
        explanation: "En la liquidación por diferencias, no se intercambia el activo real, sino el beneficio o pérdida en dinero."
    },
    {
        question: "¿Qué es una 'Covered Call' (Call Comprada)?",
        options: {
            A: "Vender una opción Call teniendo las acciones en propiedad",
            B: "Comprar una Call y una Put a la vez",
            C: "Vender una opción sin tener el activo subyacente",
            D: "Una opción que nunca vence"
        },
        answer: "A",
        explanation: "Se usa para generar ingresos extra (la prima) sobre una posición de acciones que ya tenemos, a cambio de limitar el beneficio potencial de subida."
    },
    {
        question: "¿Cuál es el modelo matemático más famoso para valorar opciones europeas?",
        options: {
            A: "Modelo de Newton",
            B: "Black-Scholes-Merton",
            C: "Teoría de la Relatividad",
            D: "Modelo de Fibonacci"
        },
        answer: "B",
        explanation: "Publicado en 1973, es la base matemática para calcular el precio 'justo' de las opciones financieras."
    },
    {
        question: "¿Qué es un 'Credit Default Swap' (CDS)?",
        options: {
            A: "Un contrato para cambiar divisas",
            B: "Un derivado que funciona como un seguro contra el impago de un bono o préstamo",
            C: "Una opción sobre índices bursátiles",
            D: "Un tipo de cuenta de ahorro"
        },
        answer: "B",
        explanation: "El comprador del CDS paga una prima para estar protegido en caso de que un emisor de deuda entre en default."
    },
    {
        question: "¿Qué diferencia a una opción 'Americana' de una 'Europea'?",
        options: {
            A: "La Americana solo se puede ejercer al vencimiento",
            B: "La Americana se puede ejercer en cualquier momento antes del vencimiento",
            C: "La Europea es siempre más cara",
            D: "La Europea no tiene Delta"
        },
        answer: "B",
        explanation: "La flexibilidad de ejercicio anticipado es la característica clave de las opciones de estilo americano."
    },
    {
        question: "¿Qué es el 'Strike Price' (Precio de Ejercicio)?",
        options: {
            A: "El precio al que cotiza el activo hoy",
            B: "El precio fijado en el contrato al que se puede comprar o vender el subyacente",
            C: "La comisión del broker",
            D: "El precio máximo histórico del activo"
        },
        answer: "B",
        explanation: "Es el precio 'objetivo' pactado en la opción para realizar la transacción futura."
    },
    {
        question: "¿Qué es el 'Nocional' de un contrato?",
        options: {
            A: "El beneficio neto de la operación",
            B: "El valor total del activo que subyace al contrato",
            C: "La garantía depositada en la cámara",
            D: "El nombre del inversor"
        },
        answer: "B",
        explanation: "Es el valor de referencia sobre el cual se calculan los pagos; por ejemplo, un contrato de futuro sobre 100 acciones."
    },
    {
        question: "¿Cuál es la función del 'Margen de Mantenimiento'?",
        options: {
            A: "Pagar las luces de la bolsa",
            B: "El nivel mínimo de fondos que debe haber en la cuenta para mantener abierta una posición de futuros",
            C: "Un impuesto estatal",
            D: "La comisión por retirar dinero"
        },
        answer: "B",
        explanation: "Si el saldo cae por debajo de este nivel debido a pérdidas, el inversor recibe una 'Margin Call' para aportar más fondos."
    },
    {
        question: "¿Qué significa 'Arbitraje'?",
        options: {
            A: "Perder dinero en dos mercados a la vez",
            B: "Aprovechar diferencias de precio en distintos mercados para obtener un beneficio sin riesgo",
            C: "Seguir los consejos de un experto",
            D: "Comprar acciones a largo plazo"
        },
        answer: "B",
        explanation: "Consiste en comprar barato en un sitio y vender caro en otro simultáneamente para ganar la diferencia."
    },
    {
        question: "¿En qué consiste un 'Iron Condor'?",
        options: {
            A: "Una apuesta a que el mercado subirá con mucha fuerza",
            B: "Una estrategia de opciones que busca beneficio cuando el mercado se mueve poco (baja volatilidad)",
            C: "Vender todas las acciones de la cartera",
            D: "Comprar solo opciones Call"
        },
        answer: "B",
        explanation: "Combina la venta de un spread de puts y un spread de calls; se gana dinero si el precio se mantiene en un rango lateral."
    },
    {
        question: "¿Qué es el 'Open Interest' (Interés Abierto)?",
        options: {
            A: "El número total de contratos que permanecen abiertos en el mercado",
            B: "El volumen de negociación del día",
            C: "El interés que paga el banco por el efectivo",
            D: "La predisposición de un inversor a comprar"
        },
        answer: "A",
        explanation: "A diferencia del volumen (operaciones del día), el interés abierto mide cuántos contratos activos existen en ese momento."
    },
    {
        question: "¿Qué es la 'Gama' (Gamma) en términos sencillos?",
        options: {
            A: "El riesgo de tiempo",
            B: "La curvatura o convexidad del precio de la opción respecto al subyacente",
            C: "El coste de transacción",
            D: "La rentabilidad por dividendo"
        },
        answer: "B",
        explanation: "Gamma indica qué tan rápido cambia la Delta; es mayor en las opciones 'At the Money'."
    },
    {
        question: "¿Qué mide la 'Theta'?",
        options: {
            A: "El riesgo de precio",
            B: "El impacto negativo del paso del tiempo en el valor de la opción",
            C: "El efecto de la volatilidad",
            D: "La probabilidad de quiebra"
        },
        answer: "B",
        explanation: "Theta representa el 'alquiler' que paga el comprador de opciones cada día que pasa."
    },
    {
        question: "¿Qué es un 'Exotic Option'?",
        options: {
            A: "Una opción sobre frutas tropicales",
            B: "Opciones con estructuras y condiciones de ejercicio más complejas que las estándar",
            C: "Opciones que solo se venden en países lejanos",
            D: "Cualquier opción comprada fuera de España"
        },
        answer: "B",
        explanation: "Son derivados con cláusulas especiales (barreras, promedios, etc.) diseñados a medida en mercados OTC."
    },
    {
        question: "¿Qué relación existe entre la volatilidad y el precio de las opciones?",
        options: {
            A: "A mayor volatilidad, menor precio de las opciones",
            B: "A mayor volatilidad, mayor precio de las opciones",
            C: "No existe ninguna relación",
            D: "La volatilidad solo afecta a los futuros"
        },
        answer: "B",
        explanation: "Si hay más volatilidad, hay más probabilidad de que la opción termine con mucho valor, por lo que se vuelven más caras."
    },
    {
        question: "¿Qué es el 'Put-Call Parity'?",
        options: {
            A: "Que las Puts siempre valen lo mismo que las Calls",
            B: "Una relación matemática entre los precios de las Calls, Puts, el subyacente y los tipos de interés",
            C: "Que el mercado está cerrado",
            D: "Una estrategia para no perder nunca"
        },
        answer: "B",
        explanation: "Es un principio de no arbitraje que dicta que carteras equivalentes deben tener el mismo precio."
    },
    {
        question: "¿Qué mide la 'Skew de Volatilidad'?",
        options: {
            A: "Que la volatilidad es igual para todos los strikes",
            B: "La diferencia de volatilidad implícita entre opciones con diferentes precios strike",
            C: "La velocidad de caída del mercado",
            D: "El volumen de las opciones Put"
        },
        answer: "B",
        explanation: "Refleja que el mercado suele temer más a las caídas bruscas, encareciendo más las Puts alejadas del precio actual."
    },
    {
        question: "¿Qué es el 'Delta Neutral'?",
        options: {
            A: "No invertir en derivados",
            B: "Una estrategia que busca que la Delta total de la posición sea cero, eliminando el riesgo de dirección del precio",
            C: "Invertir solo en empresas tecnológicas",
            D: "Cuando el mercado no se mueve"
        },
        answer: "B",
        explanation: "Se usa en arbitraje o market making para ganar por otros factores (como tiempo o volatilidad) sin importar si el activo sube o baja."
    },
    {
        question: "¿Qué posición se crea al comprar una Call y vender una Put con el mismo Strike y vencimiento?",
        options: {
            A: "Un Short Straddle",
            B: "Un Forward sintético",
            C: "Un Call Cubierta",
            D: "Un LEAPS"
        },
        answer: "B",
        explanation: "Esta combinación replica exactamente el comportamiento de un contrato Forward o la compra del activo a futuro."
    },
    {
        question: "¿Qué significa que los market makers buscan ser 'Neutrales al Riesgo'?",
        options: {
            A: "Que buscan predecir el resultado final",
            B: "Que buscan fijar precios para que su P&L esperado esté cerca de cero o por encima (neutralizar riesgo)",
            C: "Que no quieren ganar dinero",
            D: "Que el mercado no es eficiente"
        },
        answer: "B",
        explanation: "Su función es proveer liquidez ajustando precios para que sus coberturas anulen el riesgo direccional."
    },
    {
        question: "¿Qué griega permite saber si la rentabilidad de tu posición se verá afectada si el mercado se vuelve más violento?",
        options: {
            A: "Delta",
            B: "Theta",
            C: "Vega",
            D: "Rho"
        },
        answer: "C",
        explanation: "Vega es la griega encargada de medir el impacto de los cambios en la volatilidad (violencia de los movimientos) en el precio."
    }
];
