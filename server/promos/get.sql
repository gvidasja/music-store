select
    id,
    title,
    year,
    price,
    exclusive,
    promoArt,
    type,
    fk_RecordLabelid as recordLabel,
    fk_Artistid as artist,
    fk_Discountid as discount
from promos where id = {id};