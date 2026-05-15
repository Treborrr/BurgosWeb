// Habitación 1
import hab1_main     from '../assets/images/rooms/1/front.webp';
import hab1_bed      from '../assets/images/rooms/1/doubleBed.webp';
import hab1_bath     from '../assets/images/rooms/1/bathroom.webp';
import hab1_alt      from '../assets/images/rooms/1/1.webp';

// Otras Habitaciones
import hab2_bed      from '../assets/images/rooms/2/bed.webp';
import hab3_bed      from '../assets/images/rooms/3/bed.webp';
import hab5_bed      from '../assets/images/rooms/5/bed.webp';
import hab4_beds     from '../assets/images/rooms/4/beds.webp';
import hab6_bed      from '../assets/images/rooms/6/bed.webp';
import hab6_beds     from '../assets/images/rooms/6/beds.webp';
import hab7_bed      from '../assets/images/rooms/7/bed.webp';
import hab9_bed      from '../assets/images/rooms/9/bed.webp';
import hab10_main    from '../assets/images/rooms/10/mainpic.webp';
import hab10_beds    from '../assets/images/rooms/10/beds.webp';
import hab10_bath    from '../assets/images/rooms/10/bathroom.webp';

export const rooms = [
    {
        id: 1,
        name:          'Suite Familiar',
        nameEn:        'Family Suite',
        description:   'Cama Queen + cama matrimonial, baño amplio, sillón y Smart TV. Ideal para familias.',
        descriptionEn: 'Queen bed + double bed, large bathroom, armchair and Smart TV. Ideal for families.',
        price: 180, capacity: 4,
        amenities: ['Wi-Fi', 'Smart TV', 'Agua Caliente', 'Baño Amplio', 'Sillón'],
        image:  hab1_main,
        images: [hab1_main, hab1_bed, hab1_bath, hab1_alt],
    },
    {
        id: 2,
        name:          'Suite Colonial Burgos',
        nameEn:        'Colonial Burgos Suite',
        description:   'Elegante habitación con amplia cama de madera, alfombra con patrones y un ambiente cálido y acogedor.',
        descriptionEn: 'Elegant room with a large wooden bed, patterned rug, and a warm, cozy atmosphere.',
        price: 250, capacity: 2,
        amenities: ['Wi-Fi', 'Frigobar', 'Tina', 'Desayuno Plus'],
        image: hab2_bed, images: [hab2_bed],
    },
    {
        id: 3,
        name:          'Habitación Matrimonial Clásica',
        nameEn:        'Classic Double Room',
        description:   'Acogedora habitación muy bien iluminada con cama matrimonial, amplio ventanal y detalles en tonos cálidos.',
        descriptionEn: 'Cozy, bright room with a double bed, large window, and warm-toned details.',
        price: 150, capacity: 2,
        amenities: ['Wi-Fi', 'Caja Fuerte', 'Escritorio'],
        image: hab3_bed, images: [hab3_bed],
    },
    {
        id: 4,
        name:          'Triple Familiar',
        nameEn:        'Family Triple Room',
        description:   'Espacio amplio y luminoso para toda la familia con 3 camas y un ambiente relajante.',
        descriptionEn: 'Spacious and bright room for the whole family with 3 beds and a relaxing atmosphere.',
        price: 220, capacity: 3,
        amenities: ['Wi-Fi', 'TV Familiar', 'Baño Amplio'],
        image: hab4_beds, images: [hab4_beds],
    },
    {
        id: 5,
        name:          'Habitación Single Ejecutiva',
        nameEn:        'Executive Single Room',
        description:   'Perfecta para viajeros, cómoda y silenciosa con un amplio ropero y decoración elegante.',
        descriptionEn: 'Perfect for travelers, comfortable and quiet with a large wardrobe and elegant decor.',
        price: 120, capacity: 1,
        amenities: ['Wi-Fi Alta Velocidad', 'Escritorio Ergonómico'],
        image: hab5_bed, images: [hab5_bed],
    },
    {
        id: 6,
        name:          'Habitación Triple Estándar',
        nameEn:        'Standard Triple Room',
        description:   'Espaciosa habitación equipada con tres camas individuales, perfecta para grupos o familias.',
        descriptionEn: 'Spacious room equipped with three single beds, perfect for groups or families.',
        price: 140, capacity: 3,
        amenities: ['Wi-Fi', 'TV Cable', 'Ducha'],
        image: hab6_bed, images: [hab6_bed, hab6_beds],
    },
    {
        id: 7,
        name:          'Suite Junior con Vista',
        nameEn:        'Junior View Suite',
        description:   'Amplia suite con cama matrimonial, pequeña área de estar, TV plana y un ambiente muy acogedor.',
        descriptionEn: 'Spacious suite with a double bed, small living area, flat-screen TV, and a very cozy atmosphere.',
        price: 200, capacity: 2,
        amenities: ['Wi-Fi', 'Sofá Cama', 'Balcón'],
        image: hab7_bed, images: [hab7_bed],
    },
    /*
    {
        id: 8,
        name:          'Habitación Cuádruple',
        nameEn:        'Quadruple Room',
        description:   'Cuatro camas individuales para grupos de aventura.',
        descriptionEn: 'Four single beds for adventure groups.',
        price: 280, capacity: 4,
        amenities: ['Wi-Fi', 'Armarios Grandes', 'Múltiples Enchufes'],
        image: null, images: [],
    },
    */
    {
        id: 9,
        name:          'Habitación Matrimonial Confort',
        nameEn:        'Comfort Double Room',
        description:   'Confortable habitación de techos altos con vigas de madera, amplia cama matrimonial, TV plana y baño privado.',
        descriptionEn: 'Comfortable room with high ceilings and exposed wooden beams, large double bed, flat-screen TV, and private bathroom.',
        price: 160, capacity: 2,
        amenities: ['Wi-Fi', 'Almohadas Pluma', 'Smart TV'],
        image: hab9_bed, images: [hab9_bed],
    },
    {
        id: 10,
        name:          'Habitación Doble Superior',
        nameEn:        'Superior Double Room',
        description:   'Habitación amplia con dos camas cómodas, detalles florales y un baño moderno con acabados de primera.',
        descriptionEn: 'Spacious room with two comfortable beds, floral details, and a modern bathroom with premium finishes.',
        price: 230, capacity: 3,
        amenities: ['Wi-Fi', 'Baño Moderno', 'TV Plana'],
        image: hab10_main, images: [hab10_main, hab10_beds, hab10_bath],
    },
];
