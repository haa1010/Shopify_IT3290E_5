
CREATE TRIGGER add_item
    AFTER insert
    on DetailOrder
    FOR EACH ROW
EXECUTE PROCEDURE changeQty();

CREATE OR REPLACE FUNCTION changeQty()
    RETURNS trigger AS
$$
declare
    G varchar;
BEGIN
    update color set quantity= quantity - new.Quantity where IdProduct = new.IdProduct and Color.color = new.color;
    RETURN NEW;
END;
$$
    LANGUAGE plpgsql;