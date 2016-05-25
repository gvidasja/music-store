select
    payments.id,
    title,
    year,
    price,
    exclusive,
    paymenttypes.name as type,
    artists.name as artist,
    recordlabels.name as recordLabel,
    discounts.name as discount
from
    payments
    left join discounts on payments.fk_Discountid = discounts.id
    join artists on payments.fk_Artistid = artists.id
    join paymenttypes on payments.type = paymenttypes.id_Paymenttype
    join recordlabels on payments.fk_RecordLabelid = recordlabels.id