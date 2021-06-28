// FAKE DB

const PropertyModel = {
    sampleListing : [
        {
            id : 1,
            title : "Hilton Hotel",
            location : "Toronto, Canada", 
            rating : 4.3,
            type : "Hotel",
            image : "https://www3.hilton.com/resources/media/hi/TORHIHH/en_US/img/shared/full_page_image_gallery/main/HH_poolnight_24_675x359_FitToBoxSmallDimension_LowerCenter.jpg",
            image2 : "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
            image3 : "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
            price : 200,
            details : "Luxury hotel in the heart of Canada's biggest city"
        },
        {
            id : 2,
            title : "Falls Lodge & Suites",
            location : "Niagara Falls, Canada",
            rating : 4.1,
            type : "Motel",
            image : "https://cf.bstatic.com/xdata/images/hotel/max1280x900/263434937.jpg?k=7d1c42c5225de3c6db50c4e2a1957482747c61d0def0aff75fb26307acf9b133&o=&hp=1",
            image2 : "https://images.unsplash.com/photo-1521828537238-fcecf91b732c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
            image3 : "https://images.unsplash.com/photo-1520014384091-f75776a1ca4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2776&q=80",
            price : 69,
            details : "Very close in proximity to all local attractions"
        },
        {
            id : 3,
            title : "Capsule Hotel Transit Shinjuku",
            location : "Tokyo, Japan",
            rating : 4.2,
            type : "Hotel",
            image : "https://pix10.agoda.net/hotelImages/4843390/-1/9ed0a1780833fc6b340a95cfdbc1688a.jpg?s=1024x768",
            image2 : "https://images.unsplash.com/photo-1573551461515-4c44d140a829?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1617&q=80",
            image3 : "https://images.unsplash.com/photo-1539606420556-14c457c45507?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=954&q=80",
            price : 37,
            details : "Affordable and unique experience, and surprisingly cozy!"
        },
        {
            id : 4,
            title : "The Waldorf Hilton",
            location : "London, United Kingdom",
            rating : 4.4,
            type : "Hotel",
            image : "https://images.cvent.com/CSN/b40af36d-4bb2-4ede-be45-9b2ee81c9df4/images/1cf3f57da6214474ab1abb1e69818e73_LARGE!_!fea16baa40dee848065d782b1d62c4c6.jpg",
            image2 : "https://images.unsplash.com/photo-1495754149474-e54c07932677?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
            image3 : "https://images.unsplash.com/photo-1553104101-f1608f351b76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80",
            price : 295,
            details : "Victorian and contemporary fusion for a unique hotel experience"
        },
        {
            id : 5,
            title : "Four Seasons Hotel Shenzhen",
            location: "Shenzhen, China",
            rating : 4.6,
            type : "Hotel",
            image : "https://www.hospitalitynet.org/picture/xxl_153046419.jpg?t=20130606173625",
            image2 : "https://images.unsplash.com/photo-1515565324614-5b1976a7ada9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80",
            image3 : "https://unsplash.com/photos/5zX1KAjPl4o",
            price : 201,
            details : "High-end luxury hotel with first class facilities"
        },
        {
            id : 6,
            title : "Freehand Los Angeles",
            location : "Los Angeles, United States",
            rating : 4.3,
            type : "Hotel",
            image : "https://a.hwstatic.com/image/upload/f_auto,q_auto/v1/propertyimages/2/272919/25.jpg",
            image2 : "https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80",
            image3 : "https://images.unsplash.com/photo-1525905708812-b271b5e3b2f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1701&q=80",
            price : 110,
            details : "Great outside patios to enjoy the LA sun"
        },
        {
            id : 7,
            title : "Kakslauttanen Artic Resort",
            location : "Saariselka, Finland",
            rating : 4.2,
            type : "Hotel",
            image : "http://www.kakslauttanen.fi/assets/2016/06/glass-igloo-poster.jpg",
            image2 : "https://images.unsplash.com/photo-1520681279154-51b3fb4ea0f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
            image3 : "https://images.unsplash.com/photo-1517149111020-bf54819ed09a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
            price : 139,
            details : "Exotic snow-hotel, perfect for watching the Aurora Borealis"
        },
        {
            id : 8,
            title : "Kings Inn Motor Lodge",
            location : "Niagara Falls, Canada",
            rating : 4.2,
            type : "Motel",
            image : "https://media-cdn.tripadvisor.com/media/photo-s/11/3d/a5/28/kings-inn-near-the-falls.jpg",
            image2 : "https://images.unsplash.com/photo-1523459231854-ec3ba323a2e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2776&q=80",
            image3 : "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
            price : 59,
            details : "Cozy motel to stay the night"
        },
        {
            id : 9,
            title : "The Hoblet Cabin",
            location : "Niagara Falls, Canada",
            rating : 4.8,
            type : "Cabin",
            image : "https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2700&q=80",
            image2 : "https://images.unsplash.com/photo-1501685532562-aa6846b14a0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
            image3 : "https://images.unsplash.com/photo-1517404656827-b10222b9ec59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
            price : 164,
            details : "Nature setting, 14-minute walk to the Falls"
        },
        {
            id : 10,
            title : "White Oaks Resort & Spa",
            location : "Niagara Falls, Canada",
            rating : 4.5,
            type : "Resort",
            image : "https://images.trvl-media.com/hotels/1000000/450000/444600/444572/98bc93e4.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
            image2: "https://images.unsplash.com/photo-1616064959886-a500e5c38e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
            image3: "https://images.unsplash.com/photo-1559293831-8a81f3bfc36c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80",
            price : 223,
            details : "Up to two queen beds in a suite, 2 bathrooms"
        },
        {
            id : 11,
            title : "Barcelo Maya Tropical",
            location : "Playa del Carmen, Mexico",
            rating : 4.9,
            type : "Resort",
            image : "https://static.barcelo.com/content/dam/bhg/master/es/hoteles/mexico/riviera-maya/barcelo-maya-tropical/carrusel/BMAYAT_VIEW_57.jpg.bhgimg.optm1100.jpg/1604686600236.jpg",
            image2 : "https://images.unsplash.com/photo-1455587734955-081b22074882?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
            image3: "https://images.unsplash.com/photo-1551286923-c82d6a8ae079?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80",
            price : 363,
            details : "Sweet resort within walking distance of multiple beaches! Suites available for singles and families."
        },
        {
            id : 12,
            title : "Signiel Seoul",
            location : "Seoul, Korea",
            rating : 4.6,
            type : "Hotel",
            image : "https://www.lottehotel.com/content/dam/lotte-hotel/global/common/company/seoul-signiel.jpg",
            image2 : "https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1655&q=80",
            image3 : "https://images.unsplash.com/photo-1576675784201-0e142b423952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80",
            price : 399,
            details : "3 bedroom, two bathroom luxury suite"
        }
    ],
    getAllProperties() {
        return this.sampleListing;
    },
    getFeaturedProperties() {
        return this.sampleListing.filter(listing=>listing.rating>=4.5);
    },
    getSingleProperty(reqID) {
        if (reqID <= this.sampleListing.length)
            return this.sampleListing[--reqID];
        else
            return null;
    },
    getSetByType(reqType) {
        return this.sampleListing.filter(listing=>listing.type.toLowerCase()==reqType.toLowerCase());
    },
    getSetByLocation(reqLocation) {
        return this.sampleListing.filter(listing=>listing.location.toLowerCase().replace(/\s/g, '').split(",")[1]==reqLocation.toLowerCase());
    }
}

module.exports = PropertyModel;