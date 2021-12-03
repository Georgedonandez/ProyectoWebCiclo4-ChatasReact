import {
    TYPES
} from '../actions/Shopping'

export const shoppingInitialState = {
    products: [{
            id: 1,
            name: "Lomo Fino de Res",
            description:"Corte bastante suave y sin marmoleado. Este corte se cocina rápidanmente y no se endurece.",
            price: 32000,
            image: "https://scontent.fbog4-1.fna.fbcdn.net/v/t45.5328-4/13718353_1241358805898313_1330004325_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=c48759&_nc_ohc=yS_9cfQStvEAX9hErty&_nc_ht=scontent.fbog4-1.fna&oh=baa760de1208169109b83ba2ab80bfb1&oe=619B7D18"
        },
        {
            id: 2,
            name: "Churrasco",
            description:"Filete proveniente de la falda de la vaca. Ideal en preparaciones como asados o a la parrilla.",
            price: 24000,
            image: "https://thumbs.dreamstime.com/z/churrasco-crudo-rodajas-finas-de-carne-res-ingredientes-para-cocinar-con-cebolla-ajo-perejil-y-especias-212650769.jpg"
        },
        {
            id: 3,
            name: "Punta de Anca",
            description:"Corte blando de buen marmóreo y jugoso.",
            price: 24000,
            image: "https://bogotadcarnes.com/wp-content/uploads/2020/07/PUNTA-DE-ANCA-2.jpg"
        },
        {
            id: 4,
            name: "Centro de Cadera",
            description:"Corte tierno y jugoso. Esta pieza contiene los filetes de más alta categoría. Ideal para hacer a la plancha, freído y asado.",
            price: 18800,
            image: "http://www.godfishsas.com/wp-content/uploads/2020/06/CENTRO-DE-CADERA-2.jpg"
        },
        {
            id: 5,
            name: "T-Bone",
            description:"El corte del típico hueso 'T'. Un excelente corte que reúne dos piezas: Lomo fino y el entrecot.",
            price: 32000,
            image: "https://i0.wp.com/thehappening.com/wp-content/uploads/2020/11/t-bone.jpg?w=1480&ssl=1"
        },
        {
            id: 6,
            name: "Lomo de Cerdo",
            description:"Este es un corte magro muy apetecido por su bajo contenido de grasa y su fácil preparación.",
            price: 19500,
            image: "https://thumbs.dreamstime.com/z/carne-cruda-y-cerdo-fresco-cerdo-crudo-del-rollo-lomo-de-cerdo-51985263.jpg"
        },
        {
            id: 7,
            name: "Pezuña de Cerdo",
            description:"Esta pieza es de excelente sabor. Usada en estofados y sopas.",
            price: 32000,
            image: "https://www.nutricienta.com/imagenes/alimentos/alimento-nutricienta-manitas-de-cerdo.jpg"
        },
        {
            id: 8,
            name: "Costilla de Cerdo",
            description:"Un corte con gran sabor. Ideal para freír u hornear.",
            price: 18000,
            image: "https://previews.123rf.com/images/baibakova/baibakova1802/baibakova180200185/96295704-costillas-de-cerdo-cruda-sobre-tabla-de-madera-r%C3%BAstica-.jpg"
        },
        {
            id: 9,
            name: "Chuleta de Cerdo",
            description:"Este es un corte que contiene hueso lo que lo hace apetecido por su sabor y textura.",
            price: 32000,
            image: "https://st4.depositphotos.com/1004288/i/600/depositphotos_290922952-stock-photo-raw-pork-loin-chops.jpg"
        },
        {
            id: 10,
            name: "Panceta de Cerdo",
            description:"Está compuesto por piel y capas de carne. Es un corte de excelente sabor debido a su alto contenido de grasa.",
            price: 18000,
            image: "https://image.freepik.com/foto-gratis/panceta-cerdo-fresca-sobre-tabla-cortar-usada-descansando-sobre-mesa-madera-antigua_105413-1958.jpg"
        },
        {
            id: 11,
            name: "Alas",
            description:"Las alas del pollo tienen un sabor incomparable. Ideales para ser horneadas, en guisos o freídas.",
            price: 9000,
            image: "https://image.freepik.com/foto-gratis/alitas-pollo-crudo-ingredientes-cocinar_151349-2210.jpg"
        },
        {
            id: 12,
            name: "Pechuga Entera",
            description:"Esta pieza se carácteriza por ser versatil en la cocina. Su hueso es usado para sopas y guisos, además su carne es ideal para desmechar o guisar.",
            price: 13000,
            image: "https://alimentosprodalva.com/wp-content/uploads/2020/09/Filet-Pechuga-de-Pollo-Ligth.jpg"
        },
        {
            id: 13,
            name: "Filete de Pechuga",
            description:"Proveniente de la pechuga del pollo. El filete es un corte en donde ya viene sin hueso y abierta. Ideal para rellenar, enrollar o asar a la plancha.",
            price: 15000,
            image: "https://www.campollo.com/php/image_lib/thumb.php?src=/images/source/pollo/filetes-de-pechugas-porcionado.jpg&w=600&h=405&type=crop&q=90"
        },
        {
            id: 14,
            name: "Pierna Pernil",
            description:"Es la unión de el muslo y la colombina. Tiene un excelente sabor en cualquiera de sus preparaciones.",
            price: 8000,
            image: "https://thumbs.dreamstime.com/z/un-muslo-crudo-condimentado-del-pollo-en-la-tabla-antes-top-que-caza-compite-104528204.jpg"
        },
        {
            id: 15,
            name: "Muslo",
            description:"Altamente apetecida, esta pieza tiene buen contenido de carne y muy poca grasa.",
            price: 9000,
            image: "https://thumbs.dreamstime.com/z/muslo-crudo-del-pollo-crudo-pollo-con-las-verduras-37361479.jpg"
        },
    ],
    cart: []
};

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.addToCart: {
            let newItem = state.products.find(product => product.id === action.payload);
            let itemInCart = state.cart.find(item => item.id === newItem.id)
            return itemInCart ? {
                ...state,
                cart: state.cart.map(item => item.id === newItem.id ? {
                    ...item,
                    quantity: item.quantity + 1
                } : item)
            } : {
                ...state,
                cart: [...state.cart, {
                    ...newItem,
                    quantity: 1
                }]
            };
        }
        case TYPES.removeOne: {
            let itemToDelete = state.cart.find(item => item.id === action.payload);
            return itemToDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? {
                    ...item,
                    quantity: item.quantity - 1
                } : item)
            } : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        }
        case TYPES.removeAll: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            };
        }
        case TYPES.clearCart:
            return shoppingInitialState;
        default:
            return state;
    }
}