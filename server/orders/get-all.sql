select
    orders.id,
    date,
    status,
    users.email as user,
    albums.title as album,
    promos.code as promo,
    orders.price
from
    orders
        join orderstatus on orders.status = orderstatus.id_OrderStatus
        join users on orders.fk_Userid = users.id
        join albums on orders.fk_Albumid = albums.id
        left join promos on orders.fk_Promocode = promos.code
