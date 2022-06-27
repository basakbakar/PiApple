/* Bu kısım backend'ten çekilen veriler için oluşturulmuş arayüzdür. Restoranların listelendiği kısımda kullanılmak üzere yazılmıştır. */
export interface Restaurant {
    res_name: string;
    res_tanitim: string;
    res_id: number;
    adr_id: number;
    cate_id: number;
    menu_id: number;
}
