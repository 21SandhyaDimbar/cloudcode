package javaCoding;

import java.util.Random;
public class SuffleArray {

	public static void main(String[] args) {
		int arr[] = {1, 2, 3, 4, 5, 6, 7};
		arraySuffle(arr);
		

	}

	private static void arraySuffle(int[] arr) {
		 Random random = new Random();
	        for (int i = arr.length - 1; i > 0; i--) {
	            int j = random.nextInt(i + 1);
	            // Swap array[i] and array[j]
	            int temp = arr[i];
	            arr[i] = arr[j];
	            arr[j] = temp;
	        }	
	        

	        // Print the shuffled array
	        for (int num : arr) {
	            System.out.print(num + " ");
	        }  
		
	}

}
