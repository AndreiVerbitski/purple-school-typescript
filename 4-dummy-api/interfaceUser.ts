enum Gender  {
    MALE = 'male',
    FEMALE = 'female'
}
enum HairColor {
    BLACK = 'Black',
    BLOND = 'Blond',
    BROWN = 'Brown',
    CHESTUNT = 'Chestnut',
    AUBURN = 'Auburn'
}

enum HairType {
    STRANDS = 'Strands',
    CURLY = 'Curly',
    VERY_CURLY = 'Very curly',
    STRAIGHT = 'Straight',
    WAVY = 'Wavy'
}


interface Hair {
    color: HairColor,
    type: HairType
}

enum cardType {
    MAESTRO = 'maestro',
    MASTERCARD = 'mastercard',
    JCB = 'jcb',
    VISA_ELECTRON = 'visa-electron',
    AMERICANEXPRESS = 'americanexpress',
    DINERS_CLUB_CARTE_BLANCHE = 'diners-club-carte-blanche',
    BANKCARD = 'bankcard',
    INSTAPAYMENT = 'instapayment',
    SWITCH = 'switch',
    DINNERS_CLUB_ENROUTE = 'diners-club-enroute',
    SOLO = 'solo'
}

enum Currency  {
    PESO = 'Peso',
    RUBLE = 'Ruble',
    YUAN_RENMINBI = 'Yuan Renminbi',
    EURO = 'Euro',
    RUPIAH = 'Rupiah',
    RINGGIT = 'Ringgit',
    RIAL = 'Rial',
    HRYBNIA = 'Hryvnia',
    DOLLAR = 'Dollar',
    RUPEE = 'Rupee',
    KORUNA = 'Koruna',
    REAL = 'Real',
    YEN = 'Yen',
    ZLOTY = 'Zloty'
}

enum Departments {
    MARKETING = 'Marketing',
    SERVICES = 'Services',
    BUSINESS_DEVELOPMENT = 'Business Development',
    SUPPORT = 'Support',
    ACCOUNTING = 'Accounting',
    PRODUCT_MANAGEMENT = 'Product Management',
    HUMAN_RESOURCES = 'Human Resources',
    RESEARCH_AND_DEVELOPMENT = 'Research and Development',
    SALES = 'Sales',
    LEGAL = 'Legal',
    ENGINEERING = 'Engineering'
}


interface Coordinates {
    "lat": number,
    "lng": number
}

interface UserAddress {
    "address": string,
    "city": string,
    "coordinates": Coordinates,
    "postalCode": string,
    "state": string
}

interface CompanyInfo {
    "department": Departments,
    "name": string,
    "title": string
    "address" : UserAddress
}
export interface User {
    "id": number,
    "firstName": string,
    "lastName": string,
    "maidenName": string,
    "age": number,
    "gender": Gender.MALE | Gender.FEMALE,
    "email": string,
    "phone": string,
    "username": string,
    "password": string,
    "birthDate": Date,
    "image": string,
    "bloodGroup": string,
    "height": number,
    "weight": number,
    "eyeColor": string,
    "hair": Hair,
    "domain": string,
    "ip": string,
    "address": UserAddress,
    "macAddress": string,
    "university": string,
    "bank": {
        "cardExpire": string,
        "cardNumber": string,
        "cardType": cardType,
        "currency": Currency,
        "iban": string
    },
    "company": CompanyInfo,
    "ein": string,
    "ssn": string,
    "userAgent": string
}

export interface IUsers {
    users: User[],
    total: number,
    skip: number,
    limit: number

}