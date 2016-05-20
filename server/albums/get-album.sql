select
    id,
    title,
    year,
    price,
    exclusive,
    albumArt,
    type,
    fk_RecordLabelid as recordLabel,
    fk_Artistid as artist,
    fk_Discountid as discount
from albums where id = {id};