select
    code,
    description,
    discounts.name as discount,
    promos.amountLeft as amount
from
    promos join discounts on promos.fk_Discountid = discounts.id