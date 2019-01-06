import rules from './rules';

describe('utils', () => {
    describe('rules utility function', () => {
        it('should return alert string if diner orders more than one of the same course', () => {
            const currentOrders = [{ diner: 'diner1', course: 'starters', name: 'Soup'}]
            const pendingOrder = { diner: 'diner1', course: 'starters', name: 'Pâté'};
            const alert = `diner1 has already ordered Soup as their starter`;
            expect(rules(currentOrders, pendingOrder)).toEqual(alert);
        });

        it('should return alert string if diner orders more than one cheescake', () => {
            const currentOrders = [{ diner: 'diner1', course: 'desserts', name: 'Cheesecake'}]
            const pendingOrder = { diner: 'diner2', course: 'desserts', name: 'Cheesecake'};
            const alert = 'sorry there is no more cheesecake';
            expect(rules(currentOrders, pendingOrder)).toEqual(alert);
        });

        it('should return alert string if prawn cocktail is ordered with a salmon fillet', () => {
            const currentOrders = [{ diner: 'diner1', course: 'starters', name: 'Prawn cocktail'}]
            const pendingOrder = { diner: 'diner2', course: 'mains', name: 'Salmon fillet'};
            const alert = 'prawn cocktail and salmon fillet cannot be ordered together';
            expect(rules(currentOrders, pendingOrder)).toEqual(alert);
        });

        it('should return pending order object if none of the conditions are met', () => {
            const currentOrders = []
            const pendingOrder = { diner: 'diner2', course: 'mains', name: 'Salmon fillet'};
            expect(rules(currentOrders, pendingOrder)).toEqual(pendingOrder);
        });
        
    });
});