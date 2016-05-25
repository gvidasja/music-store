select
    recordLabels.id,
    title,
    year,
    price,
    exclusive,
    recordLabeltypes.name as type,
    artists.name as artist,
    recordlabels.name as recordLabel,
    discounts.name as discount
from
    recordLabels
    left join discounts on recordLabels.fk_Discountid = discounts.id
    join artists on recordLabels.fk_Artistid = artists.id
    join recordLabeltypes on recordLabels.type = recordLabeltypes.id_Paymenttype
    join recordlabels on recordLabels.fk_RecordLabelid = recordlabels.id