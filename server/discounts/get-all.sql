select
    id,
    amount,
    discounts.name as name,
    discounttypes.name as type
from
    discounts join discounttypes
        on discounts.type = discounttypes.id_DiscountType;