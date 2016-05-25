select
    id,
    title,
    year,
    price,
    exclusive,
    paymentArt,
    type,
    fk_RecordLabelid as recordLabel,
    fk_Artistid as artist,
    fk_Discountid as discount
from payments where id = {id};