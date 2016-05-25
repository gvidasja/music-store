select
    id,
    title,
    year,
    price,
    exclusive,
    userArt,
    type,
    fk_RecordLabelid as recordLabel,
    fk_Artistid as artist,
    fk_Discountid as discount
from users where id = {id};