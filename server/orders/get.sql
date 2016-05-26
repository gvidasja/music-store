select
    id,
    date,
    status,
    fk_Userid as user,
    fk_Albumid as album,
    fk_Promocode as promo,
    price
from orders where id = {id};