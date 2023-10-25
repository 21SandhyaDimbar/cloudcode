package javaCoding;

import java.util.*;

public class PanagramString {

	public static void main(String[] args) {
		String str = "Am I select coludVandana";
		boolean isPangramStr = isPangram(str);

		if (isPangramStr)
			System.out.println("It's a pangram");
		else
			System.out.println("It's not a pangram.");

	}

	public static boolean isPangram(String input) {

		Set<Character> charSet = new HashSet<>();

		input = input.toLowerCase();

		for (char c : input.toCharArray()) {

			if (Character.isLetter(c)) {
				charSet.add(c);
			}
		}

		return charSet.size() == 26;
	}
}
