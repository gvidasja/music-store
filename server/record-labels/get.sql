select
    id,
    title,
    year,
    price,
    exclusive,
    recordLabelArt,
    type,
    fk_RecordLabelid as recordLabel,
    fk_Artistid as artist,
    fk_Discountid as discount
from recordLabels where id = {id};