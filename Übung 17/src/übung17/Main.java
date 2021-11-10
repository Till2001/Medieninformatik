package übung17;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		double R, G, B, H, S, L, max, min, sum, diff, r_temp, g_temp, b_temp;
		Scanner s = new Scanner(System.in);
		System.out.println("geben sie den Rot Wert ein");
		R = s.nextDouble();
		if(R>1||R<0) {
			System.out.println("Fehlerhafte Eingabe");
			System.exit(0);
		}
		System.out.println("geben sie den Grün Wert ein");
		G = s.nextDouble();
		if(G>1||G<0) {
			System.out.println("Fehlerhafte Eingabe");
			System.exit(0);
		}
		System.out.println("geben sie den Blau Wert ein");
		B = s.nextDouble();
		if(B>1||B<0) {
			System.out.println("Fehlerhafte Eingabe");
			System.exit(0);
		}
		
		max = maximum(R, G, B);
		min = minimum(R, G, B);
		L   = avarage(min, max);
		H = 0;
		if(max == min) {
			S = 0;
		}else {
			sum = max + min;
			diff = max - min;
			if(L <= 0.5) {
				S = diff / sum;
			}else {
				S = diff / (2 - max + min);
			}
			r_temp = (max - R) / diff;
			g_temp = (max - G) / diff;
			b_temp = (max - B) / diff;
			if(R == max) {
				H = b_temp - g_temp;
			}else if(G == max) {
				H = 2 + r_temp - b_temp;
			}else if(B == max) {
				H = 4 + g_temp - r_temp;
			}
			H = H * 60;
			if(H < 0) {
				H = H + 360;
			}
		}
		System.out.printf("H:%f S:%f L:%f", H, S, L);
	}
	
	public static double maximum(double n1, double n2, double n3) {
		return Math.max(n1, Math.max(n2, n3));
	}
	
	public static double minimum(double n1, double n2, double n3) {
		return Math.min(n1, Math.min(n2, n3));
	}
	
	public static double avarage(double n1, double n2) {
		return ((n1 + n2) / 2);
	}

}
