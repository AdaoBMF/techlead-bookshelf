import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs';

export class CrudService<T> {
  constructor(
    protected http: HttpClient,
    protected API_URL: string,
    private page: string,
  ) {}

  list() {
    return this.http
      .get<T[]>(`${this.API_URL}${this.page}`)
      .pipe(
        take(1)
        // tap()
        );
  }

  loadById(id: number) {
    return this.http.get<T>(`${this.API_URL}${this.page}/${id}`).pipe(take(1));
  }
  

  private add<T>(record: T) {
    return this.http
      .post<T>(`${this.API_URL}${this.page}`, record)
      .pipe(take(1));
  }

  private update<T>(record: T) {
    return this.http
      .put(`${this.API_URL}${this.page}`, record) // teste retirando id
      .pipe(take(1));
  }

  save(record: { id: number; } ) {
    if (record.id) {
      return this.update(record);
    }
    return this.add(record);
  }

  delete(id: number) {
    return this.http
      .delete<T>(`${this.API_URL}${this.page}/${id}`)
      .pipe(take(1));
  }
}
