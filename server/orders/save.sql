insert into orders(
    id,
    date,
    status,
    fk_Userid,
    fk_Albumid,
    fk_Promocode,
    price
) values (
    {id},
    {date},
    {status},
    {user},
    {album},
    '{promo}',
    {price}
) on duplicate key update
    id = values(id),
    date = values(date),
    status = values(status),
    fk_Userid = values(fk_Userid),
    fk_Albumid = values(fk_Albumid),
    fk_Promocode = values(fk_Promocode),
    price = values(price)