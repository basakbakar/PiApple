/* Bu kısım backend'ten çekilen veriler için oluşturulmuş arayüzdür. Rezervasyon işlemleri için oluşturulan formda kullanılır. */
export interface Orders {
    id: string;
    useremail: string;
    username: string;
    usersurname: string;
    ordertimeday: string;
    ordertimehour: string;
    restauranname: string;
}
