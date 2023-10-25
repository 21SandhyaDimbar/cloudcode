package javaCoding;

import java.util.Scanner;

public class RomanToInteger {

	public static void main(String[] args) {
		Scanner scan =new Scanner(System.in);
		System.out.println("Enter a Roman Number : ");
		String romanInput = scan.nextLine().toUpperCase();
		
		System.out.println(romanInput+" "+romanToInt(romanInput));
			}
	
	static int numVal(char roman) {
		if(roman == 'I')
			return 1;
		if(roman == 'V')
			return 5;
		if(roman == 'X')
			return 10;
		if(roman == 'L')
			return 50;
		if(roman == 'C')
			return 100;
		if(roman == 'D')
			return 500;
		if(roman == 'M')
			return 1000;
		return -1;
	}

	 static int romanToInt(String str) {
	      int result = 0;
	      for (int i=0; i<str.length(); i++) {
	         int s1 = numVal(str.charAt(i));
	         if (i+1 <str.length()) {
	            int s2 = numVal(str.charAt(i+1));
	            if (s1 >= s2) {
	               result = result + s1;
	            }
	            else {
	               result = result - s1;
	            } 
	         }
	         else {
	            result = result + s1;
	         } 
	      }
	      return result;
	   } 

}
