select
    promos.id,
    title,
    year,
    price,
    exclusive,
    promotypes.name as type,
    artists.name as artist,
    recordlabels.name as recordLabel,
    discounts.name as discount
from
    promos
    left join discounts on promos.fk_Discountid = discounts.id
    join artists on promos.fk_Artistid = artists.id
    join promotypes on promos.type = promotypes.id_Promotype
    join recordlabels on promos.fk_RecordLabelid = recordlabels.id