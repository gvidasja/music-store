select
    code,
    description,
    fk_Discountid as discount,
    amountLeft as amount
from promos where code = '{code}';