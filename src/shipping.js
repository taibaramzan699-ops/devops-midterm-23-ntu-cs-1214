function fee(weightKg) {
    if (typeof weightKg !== 'number' || weightKg <= 0) {
        throw new RangeError('weight must be a number greater than 0');
    }

    if (weightKg <= 1) return 200;
    if (weightKg < 5) return 350;
    if (weightKg <= 20) return 800;

    return 1500;
}

module.exports = { fee };
