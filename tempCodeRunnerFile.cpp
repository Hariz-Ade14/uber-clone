#include <iostream>
using namespace std;

double calculateTotalPayment(double amount) {
    double discount = 0.0;

    if (amount > 200000 && amount < 1000000) {
        discount = 0.03;
    } else if (amount >= 1000000) {
        discount = 0.07;
    }

    double discountedAmount = amount * (1 - discount);
    return discountedAmount;
}

int main() {
    double purchaseAmount;
    
    cout << "Enter the total purchase amount: ";
    cin >> purchaseAmount;

    double totalPayment = calculateTotalPayment(purchaseAmount);

    cout << "Total payment after discount: $" << totalPayment << endl;

    return 0;
}

//Sanni Hariz Adebayo