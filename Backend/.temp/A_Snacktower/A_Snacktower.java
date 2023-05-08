import java.util.Scanner;
import java.util.ArrayList;
public class A_Snacktower {
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        int N = scan.nextInt();
        int n = N;
        ArrayList<Integer> list = new ArrayList<Integer>();

        for (int i = 0; i < N; i++)
        {
            int meal = scan.nextInt();
            if ( meal == n)
            {
                System.out.print(meal + " ");
                n--;
                while (list.contains(n))
                {
                    System.out.print(n + " ");
                    n--;
                }
                System.out.println();
            }
            else
            {
                list.add(meal);
                System.out.println();
            }
        }
    }
}