select
    orders.id,
    title,
    year,
    price,
    exclusive,
    ordertypes.name as type,
    artists.name as artist,
    recordlabels.name as recordLabel,
    discounts.name as discount
from
    orders
    left join discounts on orders.fk_Discountid = discounts.id
    join artists on orders.fk_Artistid = artists.id
    join ordertypes on orders.type = ordertypes.id_Ordertype
    join recordlabels on orders.fk_RecordLabelid = recordlabels.id