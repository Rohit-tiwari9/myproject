#include<stdio.h>
#include<stdlib.h>// for input output functions
#include<time.h> // for time functions
int main() {
    srand(time(NULL)); // seed the random number generator
    int number = rand() % 100+1; // random number between 1 and 100
int guess =0;
do{
    printf("Enter your guess between 1 to 100 : ");
    scanf("%d", &guess);
    if (guess> number){
        printf("Too high! Try again.\n");
    }
    else if (guess< number){
        printf("Too low! Try again.\n");
    }
    else{
        printf("Congratulations! You guessed the number %d correctly.\n", number);
    }
} while(guess != number);
    return 0;
}