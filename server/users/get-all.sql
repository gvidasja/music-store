select
    users.id,
    title,
    year,
    price,
    exclusive,
    usertypes.name as type,
    artists.name as artist,
    recordlabels.name as recordLabel,
    discounts.name as discount
from
    users
    left join discounts on users.fk_Discountid = discounts.id
    join artists on users.fk_Artistid = artists.id
    join usertypes on users.type = usertypes.id_Usertype
    join recordlabels on users.fk_RecordLabelid = recordlabels.id