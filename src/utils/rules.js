export default function rules(currentOrders, pendingOrder) {

    // each diner cannot have more than one of the same course
    const repeatOrder = currentOrders.filter((order) => {
        return order.course === pendingOrder.course && order.diner === pendingOrder.diner;
    });

    if (repeatOrder.length != 0) {
        return `${pendingOrder.diner} has already ordered `
            + `${repeatOrder[0].name} as their ${pendingOrder.course.slice(0, -1)}`;
    }

    // there is only one piece of cheesecake left
    const cheesecakeOrdered = currentOrders.find((order) => {
        return order.name === 'Cheesecake';
    });

    if (cheesecakeOrdered && pendingOrder.name === 'Cheesecake') {
        return 'sorry there is no more cheesecake';
    }

    // the waiter will not let you have prawn cocktail and a salmon fillet in the same meal
    const prawnCocktailOrdered = currentOrders.find((order) => {
        return order.name === 'Prawn cocktail';
    });

    const salmonFilletOrdered = currentOrders.find((order) => {
        return order.name === 'Salmon fillet';
    });

    if ((prawnCocktailOrdered && pendingOrder.name === 'Salmon fillet') || 
        (salmonFilletOrdered && pendingOrder.name === 'Prawn cocktail')) {
        return 'prawn cocktail and salmon fillet cannot be ordered together';
    }

    // if bruschetta and steak ordered add 10% discount
    const bruschettaOrdered = currentOrders.find((order) => {
        return order.name === 'Bruschetta';
    });

    const steakOrdered = currentOrders.find((order) => {
        return order.name === 'Steak';
    });

    if ((bruschettaOrdered && pendingOrder.name === 'Steak') 
        || (steakOrdered && pendingOrder.name === 'Bruschetta')) {
            return { ...pendingOrder, discount: true };
    }

    return pendingOrder;
}